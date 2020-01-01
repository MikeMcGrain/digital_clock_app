let currentDateInfo = new Date()

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

let day = days[currentDateInfo.getDay()]
let date = currentDateInfo.getDate()
let month = months[currentDateInfo.getMonth()]
let year = currentDateInfo.getFullYear()

document.getElementById("show-date").innerHTML = day + " " + month + " " + date + ", " + year


function getCurrentTime() {
    let currentTimeInfo = new Date()
    let ampm = currentTimeInfo.getHours() >= 12 ? 'PM' : 'AM'
    let hour = ((currentTimeInfo.getHours() + 11) % 12 + 1)
    currentTime = hour + ":" + currentTimeInfo.getMinutes()
    document.getElementById("show-time").innerHTML = currentTime + " " + ampm
}

setInterval(getCurrentTime, 1000)



