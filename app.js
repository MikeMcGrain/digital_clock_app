const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]

let twelveHourFormat = true
let toggleButton = document.getElementById("toggle-time-button")
toggleButton.innerHTML = "24-Hour Clock"

toggleButton.addEventListener("click", () => {
  twelveHourFormat = !twelveHourFormat
  toggleButton.innerHTML = twelveHourFormat ? "12-Hour Clock" : "24-Hour Clock"
})

function getDateAndTime() {
  let dateObject = new Date()

  let day = DAYS[dateObject.getDay()]
  let date = dateObject.getDate()
  let month = MONTHS[dateObject.getMonth()]
  let year = dateObject.getFullYear()

  document.getElementById("day").innerHTML = day
  document.getElementById("date").innerHTML = `${month} ${date}, ${year}`

  let hour = twelveHourFormat
    ? ((dateObject.getHours() + 11) % 12) + 1
    : formatTime(dateObject.getHours())
  let minute = formatTime(dateObject.getMinutes())
  let second = formatTime(dateObject.getSeconds())
  let ampm = dateObject.getHours() >= 12 ? "pm" : "am"

  document.getElementById("time").innerHTML = `${hour}:${minute}:${second} ${ampm}`
}

function formatTime(time) {
  return ("0" + time).slice(-2)
}

getDateAndTime()
setInterval(getDateAndTime, 1000)