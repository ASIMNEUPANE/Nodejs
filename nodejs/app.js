const http = require("http");
const date = require("./myModule");
const uc = require("upper-case")



const myFunction = (req,res)=>{
    const dateTime = date();
const upper = uc.upperCase("string");
    
res.end(`Hello worldclass ${dateTime} ${upper} `);

};

http.createServer(myFunction).listen(3001);

console.log("app runing on 3001")



