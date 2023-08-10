const QRCode = require('qrcode');
const http = require("http");



const QRd = async(text)=> {
  const generateQr =  await QRCode.toDataURL(text)
return generateQr
 }


const ht = http.createServer(async (req,res)=>{

  const data = await QRd("https://github.com/ASIMNEUPANE")

  res.writeHead(200, { 'Content-Type': 'text/html' });
  const html =  `<img src= "${data}">  </img>`;
  res.end(html)

}
)


ht.listen(3002)