//https://sharp.pixelplumbing.com/
const sharp = require("sharp");

async function processImages() {
  //const metadata = await sharp("assets/img/m-icon.png").metadata();
  //console.log(metadata);

  await sharp('assets/img/wrench-banner-3000.jpg')
    //.webp({ lossless: true })
    //.resize({ width: 800 })
    .webp({ quality: 90 })
    .toFile('assets/img/wrench-banner-3000.webp');


/*
    const file = 'assets/img/layer-22-3000.jpg';
    const rename = 'assets/img/layer-22';
    const quality = 90;

    await sharp(file)
      .webp({ quality: quality })
      .toFile(rename+'-3000.webp');

    await sharp(file)
      .resize({ width: 2000 })
      .webp({ quality: quality })
      .toFile(rename+'-2000.webp');

    await sharp(file)
      .resize({ width: 1000 })
      .webp({ quality: quality })
      .toFile(rename+'-1000.webp');
  */

}

processImages();
