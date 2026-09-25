const SHEET_ID = '1Qx0SHyoWckB7_Hss3gu_stpcVV1U9YFObr9xLEnhzWI';

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ok:true, app:'Hub Kajian Kes'}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sh = ss.getSheets()[0];

    // Struktur Sheet:
    // A Tarikh Hantar | B Nama Murid | C Kelas | D Masyarakat dikaji | E Link Canva
    const p = e.parameter || {};
    sh.appendRow([
      new Date(),
      p.nama || '',
      p.kelas || '',
      p.masyarakat || '',
      p.link || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ok:true,message:'Berjaya dihantar'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ok:false,error:String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}