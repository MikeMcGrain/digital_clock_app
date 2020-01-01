let currentDateInfo = new Date()

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

let day = days[currentDateInfo.getDay()]
let date = currentDateInfo.getDate()
let month = months[currentDateInfo.getMonth()]
let year = currentDateInfo.getFullYear()

document.getElementById("date-display").innerHTML = day + ", " + month + " " + date + ", " + year
