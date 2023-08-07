const http = require("http");
const date = require("./myModule");

const myFunction = (req,res)=>{
    const dateTime = date();
res.end(`Hello worldclass ${dateTime}`);

};

http.createServer(myFunction).listen(3000);
console.log("hdsjhsdk")