// toggles time between 12 and 24-hour formats
let twelveHourFormat = true
const toggleButton = document.getElementById("toggle-time-btn")
toggleButton.innerHTML = "24-Hour Clock"
toggleButton.onclick = () => {
    twelveHourFormat = !twelveHourFormat
    toggleButton.innerHTML = twelveHourFormat ? "12-Hour Clock" : "24-Hour Clock"
}

//get current time and date info, then display
function getCurrentTime() {
    // get current date info, then display
    let currentDateInfo = new Date()

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    let day = days[currentDateInfo.getDay()]
    let currentDate = currentDateInfo.getDate()
    let month = months[currentDateInfo.getMonth()]
    let year = currentDateInfo.getFullYear()

    document.getElementById("show-day").innerHTML = day
    document.getElementById("show-date").innerHTML = `${month} ${currentDate}, ${year}`

    let date = new Date()
    let hour = twelveHourFormat ? ((date.getHours() + 11) % 12 + 1) : formatTime(date.getHours()) 
    let minute = formatTime(date.getMinutes())
    let second = formatTime(date.getSeconds())
    let ampm = date.getHours() >= 12 ? 'pm' : 'am'

    document.getElementById("show-time").innerHTML = `${hour}:${minute}:${second} ${ampm}` 
}

function formatTime(time) {
    return ("0" + time).slice(-2)
}

setInterval(getCurrentTime, 1000)