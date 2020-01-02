// get current date info, then display
let currentDateInfo = new Date()

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

let day = days[currentDateInfo.getDay()]
let date = currentDateInfo.getDate()
let month = months[currentDateInfo.getMonth()]
let year = currentDateInfo.getFullYear()

document.getElementById("show-day").innerHTML = day
document.getElementById("show-date").innerHTML = month + " " + date + ", " + year

//get current time info, then display
function getCurrentTime() {
    let currentTimeInfo = new Date()

    let hour = twelveHourFormat ? ((currentTimeInfo.getHours() + 11) % 12 + 1) : ("0" + currentTimeInfo.getHours()).slice(-2) 
    let minute = ("0" + currentTimeInfo.getMinutes()).slice(-2)
    let second = ("0" + currentTimeInfo.getSeconds()).slice(-2)
    let ampm = currentTimeInfo.getHours() >= 12 ? 'pm' : 'am'

    document.getElementById("show-time").innerHTML = hour + ":" + minute + ":" + second + " " + ampm 
}

setInterval(getCurrentTime, 1000)

// toggles time between 12 and 24-hour formats
let twelveHourFormat = true

function toggleTime() {
    twelveHourFormat = !twelveHourFormat
}