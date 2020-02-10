const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]

let twelveHourFormat = true

document.getElementById("toggle-time-button").addEventListener("click", () => {
  twelveHourFormat = !twelveHourFormat
  document.getElementById("toggle-time-button").innerText = twelveHourFormat ?  "24-Hour Clock" : "12-Hour Clock"
  renderDateAndTime()
})

function renderDateAndTime() {
  let date = new Date()

  let hour = twelveHourFormat ? ((date.getHours() + 11) % 12) + 1 : formatTime(date.getHours())
  let minute = formatTime(date.getMinutes())
  let second = formatTime(date.getSeconds())
  let ampm = date.getHours() >= 12 ? "pm" : "am"

  document.getElementById("day").innerText = DAYS[date.getDay()]
  document.getElementById("date").innerText = `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  document.getElementById("time").innerText = twelveHourFormat 
    ? `${hour}:${minute}:${second} ${ampm}` 
    : `${hour}:${minute}:${second}`
}

function formatTime(time) {
  return ("0" + time).slice(-2)
}

renderDateAndTime()
setInterval(renderDateAndTime, 1000)