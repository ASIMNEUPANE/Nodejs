const cc = require('currency-converter-lt')

const convert = new cc({from:"USD", to:"JPy", amount:100})
const converter = ()=>{
  const convo =   convert.convert().then((response) => {
        console.log(response) //or do something else
    })
    return convo
    
}



console.log(converter());