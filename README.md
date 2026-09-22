# Design A Borneo Village

Prototaip tugasan Kajian Kes Individu Bab 10.

## Masukkan video Gemini
1. Letakkan video dalam folder `assets` dengan nama `intro-borneo.mp4`.
2. Dalam `index.html`, cari blok `<div class="video">...</div>`.
3. Gantikan keseluruhan blok itu dengan:

```html
<video class="video" controls playsinline preload="metadata">
  <source src="assets/intro-borneo.mp4" type="video/mp4">
  Browser anda tidak menyokong video.
</video>
```

## GitHub Pages
Upload semua fail/folder ke repository GitHub. Pastikan `index.html` berada di root repository, kemudian aktifkan Pages melalui Settings > Pages.
