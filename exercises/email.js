const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const { promisify } = require("util");
const fs = require("fs");

const readFile = promisify(fs.readFile);

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'asimneupane11@gmail.com',
      pass: 'albonhimkauffryf',
    }
  });



  async function main(receivers, data, htmlFile) {
    const html = await readFile(htmlFile, "utf8");
    const template = handlebars.compile(html);
  
    const htmlToSend = template(data);
  
    const info = await transporter.sendMail({
      from: '"Asim Neupane👻" <asimneupane11@gmail.com>', // sender address
      to: receivers.toString(), // list of receivers
      subject: "Hello ✔", // Subject line
      html: htmlToSend,
    });
  
    console.log("Message sent: %s", info.messageId);
  }
  
  // Change here
  const data = {
    name: "Asim Neupane",
    msg: "How are you??",
  };
  const htmlFile = "./index.html";
  const receivers = ["asimneupane11@gmail.com"];
  main(receivers, data, htmlFile).catch(console.error);
