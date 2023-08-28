const PDFDocument = require('pdfkit');
const doc = new PDFDocument;
const fs = require('fs')
const http = require('http')

const htp = http.createServer((req, res) => {
    doc.pipe(fs.createWriteStream('./file.pdf')); 
    doc.pipe(res);
    doc.text('Hello world!', 100, 100)                            

    doc.image('./img.png', 430, 15, {fit: [100, 100], align: 'center', valign: 'center'})
   .rect(430, 15, 100, 100).stroke()
   .text('Centered', 430, 0);
    
    doc.end();
})

htp.listen(3004)