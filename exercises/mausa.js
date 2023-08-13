const axios = require('axios');

async function getUser(url) {
    try {
        const { data } = await axios.get('url');
        const { hourly } = data;

        const myFunction = () => {
          return  ({ hoursdata: hourly.time, hourlyTemp: hourly.temperature_2m })

           
        }
        const findIndex = hoursdata.findIndex(4);
console.log(findIndex);
myFunction()
     

        //    const {name} = data;
        //    return {sunrise: daily.sunrise, sunset: daily.sunset };

    } catch (error) {
        console.error(error);
    }
}



findTime = new Date().getHours()


// const findIndex = hourly.time.findIndex(findTime);
// console.log(findIndex);






