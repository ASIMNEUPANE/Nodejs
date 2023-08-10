const QRCode = require('qrcode');
const QRd = (url)=>{
    QRCode.toDataURL('https://github.com/ASIMNEUPANE',    (err, url)=> {
    console.log(url)
  })}

  console.log(QRd);
  