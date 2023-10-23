const http = require("http");
// const date = require("./myModule");
// const format = require("moment");
// const uc = require("upper-case");
const qr = require("./qrcode");
const { type } = require("os");

 const myFunction = async(req,res)=>{
//  some date method const dateTime = date();
// const upper = uc.upperCase("string");

// const formats = format();
const qrcode =  qr("https://github.com/ASIMNEUPANE");
const data= `<img src=${qrcode} width="500"></>`
res.write(data);

res.end();

    // date in good formay res.end(formats().format("dddd, MMMM Do YYYY, h:mm:ss a"));
// res.end(`Hello worldclass ${dateTime} ${upper} `);

};

http.createServer(myFunction).listen(11000);







