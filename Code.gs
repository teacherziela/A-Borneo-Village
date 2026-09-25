const SHEET_ID = '1Qx0SHyoWckB7_Hss3gu_stpcVV1U9YFObr9xLEnhzWI';
const SHEET_NAME = 'Penghantaran';

function getSheet_() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow(['Tarikh','Nama','Kelas','Tugasan','Masyarakat','Link Canva']);
    sh.setFrozenRows(1);
  }
  return sh;
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    if (!data.nama || !data.kelas || !data.tugasan || !data.masyarakat || !data.link) {
      return json_({ok:false,error:'Maklumat belum lengkap.'});
    }
    if (!/^https?:\/\//i.test(data.link)) {
      return json_({ok:false,error:'Pautan Canva tidak sah.'});
    }
    getSheet_().appendRow([
      new Date(), String(data.nama).trim(), String(data.kelas).trim(),
      String(data.tugasan).trim(), String(data.masyarakat).trim(), String(data.link).trim()
    ]);
    return json_({ok:true});
  } catch (err) {
    return json_({ok:false,error:String(err)});
  }
}

function doGet() {
  try {
    const sh = getSheet_();
    const values = sh.getDataRange().getDisplayValues();
    const data = values.slice(1).filter(r => r[1]).map(r => ({
      tarikh:r[0], nama:r[1], kelas:r[2], tugasan:r[3], masyarakat:r[4], link:r[5]
    })).reverse();
    return json_({ok:true,data:data});
  } catch (err) {
    return json_({ok:false,error:String(err),data:[]});
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
