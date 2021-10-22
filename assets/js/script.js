console.log("js script connected")

//input vars
let city = "Seattle";
let api = "67e5d9a31580eecf6ceba074d4645128";

//fetch vars
let fetchURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&cnt=16&appid=" + api;

//placeholder vars
let forecastData = [];

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
                    forecastData.push(forecastDataObj);
                }
                console.log(forecastData);
            }
        })
};

fetchFunc(fetchURL);
