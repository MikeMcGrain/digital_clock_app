const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

// toggles time between 12 and 24-hour formats
let twelveHourFormat = true
const toggleButton = document.getElementById("toggle-time-btn")
toggleButton.innerHTML = "24-Hour Clock"
toggleButton.onclick = () => {
    twelveHourFormat = !twelveHourFormat
    toggleButton.innerHTML = twelveHourFormat ? "12-Hour Clock" : "24-Hour Clock"
}

//get current time and date info, then display
function getDateAndTime() {
    let date = new Date()
    
    let day = days[date.getDay()]
    let currentDate = date.getDate()
    let month = months[date.getMonth()]
    let year = date.getFullYear()

    document.getElementById("show-day").innerHTML = day
    document.getElementById("show-date").innerHTML = `${month} ${currentDate}, ${year}`

    let hour = twelveHourFormat ? ((date.getHours() + 11) % 12 + 1) : formatTime(date.getHours()) 
    let minute = formatTime(date.getMinutes())
    let second = formatTime(date.getSeconds())
    let ampm = date.getHours() >= 12 ? 'pm' : 'am'

    document.getElementById("show-time").innerHTML = `${hour}:${minute}:${second} ${ampm}` 
}

function formatTime(time) {
    return ("0" + time).slice(-2)
}

getDateAndTime()
setInterval(getDateAndTime, 1000)