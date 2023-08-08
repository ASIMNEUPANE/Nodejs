const fs = require("fs");

const file = fs.createReadStream("./data.txt");


file.on("open", ()=>{
console.log("data.txt file is open");
});


const data = "hello world";


// write to file
// fs.writeFileSync("./data.txt", data);


// add to file


fs.appendFileSync(" ./data.txt", data);g