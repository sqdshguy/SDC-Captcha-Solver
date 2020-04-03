// SDC Captcha Solver
// by Mrsasha45op
// 2020

const https = require('follow-redirects').https,
      fs = require('fs');

const options = {
  'method': 'POST',
  'hostname': 'api.ocr.space',
  'path': '/parse/image',
  'headers': {
    'apikey': '' // Your API key on ocr.space
  },
  'maxRedirects': 20
};

const urlToCaptcha = "https://cdn.discordapp.com/attachments/663398140736569355/695716719682912326/captcha.png"; // Ссылка на каптчу SD.C


const req = https.request(options, (res) => {
  var chunks = [];

  res.on("data", (chunk) => {
    chunks.push(chunk);
  });

  res.on("end", (chunk) => {
    const body = Buffer.concat(chunks);
    console.log(`Parsed text: ${JSON.parse(body).ParsedResults[0].ParsedText}`); // Result of OCR
  });

  res.on("error", (error) => {
    console.error(error);
  });
});

const postData = `------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"language\"\r\n\r\neng\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"isOverlayRequired\"\r\n\r\nfalse\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"url\"\r\n\r\n${urlToCaptcha}\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"iscreatesearchablepdf\"\r\n\r\nfalse\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"issearchablepdfhidetextlayer\"\r\n\r\nfalse\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--`;
req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');
req.write(postData);
req.end();



