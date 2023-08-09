const moment= require('moment');


const findTime = ()=>{
   return  moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    
}
console.log(findTime())