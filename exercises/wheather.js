
const ax = require("axios");

const wheaters = async()=>{
    return await fetch({"latitude":27.75,"longitude":85.5,"generationtime_ms":1.8749237060546875,"utc_offset_seconds":20700,"timezone":"Asia/Kathmandu","timezone_abbreviation":"+0545","elevation":1289.0,"hourly_units":{"time":"iso8601","temperature_2m":"°C"},"hourly":{"time":["2023-08-09T00:00","2023-08-09T01:00","2023-08-09T02:00","2023-08-09T03:00","2023-08-09T04:00","2023-08-09T05:00","2023-08-09T06:00","2023-08-09T07:00","2023-08-09T08:00","2023-08-09T09:00","2023-08-09T10:00","2023-08-09T11:00","2023-08-09T12:00","2023-08-09T13:00","2023-08-09T14:00","2023-08-09T15:00","2023-08-09T16:00","2023-08-09T17:00","2023-08-09T18:00","2023-08-09T19:00","2023-08-09T20:00","2023-08-09T21:00","2023-08-09T22:00","2023-08-09T23:00"],"temperature_2m":[21.5,21.4,21.4,21.1,20.8,20.8,21.2,22.6,23.2,23.7,24.4,25.2,25.6,26.2,26.1,25.8,25.2,25.5,24.4,23.4,22.7,22.3,22.0,21.7]},"daily_units":{"time":"iso8601","sunrise":"iso8601","sunset":"iso8601"},"daily":{"time":["2023-08-09"],"sunrise":["2023-08-09T05:30"],"sunset":["2023-08-09T18:47"]}})
}

console.log(wheaters());

