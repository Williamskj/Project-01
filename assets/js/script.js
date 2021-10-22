console.log("js script connected")

//api key
let api = "67e5d9a31580eecf6ceba074d4645128";

//input vars
let sampleDate = '11/05/2021';

//placeholder vars
let fetchURL;

var date = document.querySelector("date")
var startLoc = document.querySelector("start-loc")
var endLoc = document.querySelector("end-loc")
var submit = docuement.querySelector("submit")

var pastSearchArray = []
var weatherData = []
var weather
var flightData
var flightCarrierPrice

//prep the fetch url for different cities
function fetchCity(x) {
    fetchURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + x + "&cnt=16&appid=" + api;
    fetchFunc(fetchURL);
}

//fetches data from the api and stores it as an array of objects
function fetchFunc(x) {
    fetch(x, {
    })
        .then(function (response) {
            if (response.status === 200) {
                return response.json();
            } else {
                console.log('error ' + response.status);
            }
        })
        .then(function (data) {
            if (data) {
                console.log(data)
                for (let index = 0; index < data.list.length; index++) {

                    //pick specific data from fetch
                    let forecastDataObj = new Object();
                    forecastDataObj.date = data.list[index].dt;
                    forecastDataObj.weather = data.list[index].weather[0].description
                    forecastDataObj.weatherIcon = data.list[index].weather[0].icon
                    weatherData.push(forecastDataObj);
                }
                console.log(forecastData);
                for (let index = 0; index < forecastData.length; index++) {
                    weatherData[index].date = convertedDate = (dayjs.unix(weatherData[index].date)).format("MMM DD, YYYY");
                    weatherData[index].weatherIcon = "http://openweathermap.org/img/wn/" + weatherData[index].weatherIcon + "@2x.png"
                }
                console.log(weatherData)
                findDate(sampleDate)
            }
        })
};

//finds the info for date that is input 
function findDate(x) {

    let sampleDate = dayjs(x).format("MMM DD, YYYY");
    var indexValue = forecastData.find(function (post, index) {
        if (post.date == sampleDate)
            return true;
    });
    console.log(indexValue);
}

var localSearchHistory = JSON.parse(localStorage.getItem("history"))

//if a user comes to the page for the first time local storage is empty
//set the date, starting location, and ending location to empty strings 
if (localSearchHistory == null) {
    pastSearchArray = []
    localSearchHistory = pastSearchArray
    date.textContent = ""
    startLoc.textContent = ""
    endLoc.textContent = ""
}
//if local storage is not null aka empty then the user has been on the page before
//Load their previous information into the "pastSearchArray"
else {
    pastSearchArray = localSearchHistory
}

submit.addEventListener("click", function () {


    pastSearchArray.push({ date: date.textContent })
    pastSearchArray.push({ startLoc: startLoc.textContent })
    pastSearchArray.push({ endLoc: endLoc.textContent })

    //fetch weather

    fetchCity("Sad");

    //fetch flight data 

    //find the weather object with same date the user input in the text field and return the weather object with the matching date 
    for (var i = 0; i < weatherData.length; i++) {
        if (weatherData[i].date == date) {
            weather = weatherData[i]
        }
    }
    pastSearchArray.push(weather)

    //do something with the flight data 
    pastSearchArray.push(flightCarrierPrice)

    localSearchHistory = JSON.stringify(localStorage.setItem("history", pastSearchArray))

})







