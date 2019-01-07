//dice 



  
const button = document.getElementById("button")
button.addEventListener('click', function (event){ 
  const die = document.querySelector('#die')
  const d1 = Math.floor(Math.random() * 6) + 1
  
die.innerHTML = d1

  
})




//weather 
const API_KEY = "603cad15e6bfc2ee4c53e5a5f6465736"


function handleFormSubmit(event) {
  //handle submit event
  const input = document.querySelector('#city')
  const city = input.value
  fetchCurrentWeather(city)
  fetchFiveDayForecast(city)
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + API_KEY + '&units=imperial')
  .then((response) => response.json())
  .then((responseJson) => {
  displayCurrentWeather(responseJson)
  createChart(responseJson)
  })
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  
  const tempAlert = json.main.temp


if (tempAlert < 35) {
 alert('sexy long john time')
} else if (tempAlert > 75) { 
  alert('suns out guns out')
}
  
console.log(json)

const temperatureCell = document.querySelector('#temp')
const low = document.querySelector('#low')
const high = document.querySelector('#high')
const humidity = document.querySelector('#humidity')
const cloudCover = document.querySelector('#cloudCover')

temperatureCell.innerText = json.main.temp +'°F'
low.innerText = json.main.temp_min + '°F'
high.innerText = json.main.temp_max + '°F'
humidity.innerText = json.main.humidity + '%'
cloudCover.innerText = json.clouds.all + '%'

}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  
  fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=' + API_KEY + '&units=imperial')
  .then((response) => response.json())
  .then((responseJson) => displayFiveDayForecast(responseJson))


}

function getDataText(forecast) { 
  return forecast.dt_txt

}



document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('submit', function(event) {
    handleFormSubmit(event)
  event.preventDefault()
  handleFormSubmit(event)
  
})
  
})
