const QRCode = require('qrcode');
const QRd = (url)=>{
    QRCode.toDataURL('url',    (err, url)=> {
    console.log(url)
  })}

  module.exports =QRd ;