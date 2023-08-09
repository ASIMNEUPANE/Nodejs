const http = require("http");
const date = require("./myModule");
const format = require("moment");
const uc = require("upper-case");



const myFunction = (req,res)=>{
    const dateTime = date();
const upper = uc.upperCase("string");

const formats = format();

    res.end(formats().format("dddd, MMMM Do YYYY, h:mm:ss a"));
// res.end(`Hello worldclass ${dateTime} ${upper} `);

};

http.createServer(myFunction).listen(3002);

console.log("app runing on 3001")



