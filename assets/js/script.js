console.log("js script connected")

//api key
let api = "67e5d9a31580eecf6ceba074d4645128";

//input vars


//placeholder vars
let fetchURL;

// var date = document.querySelector("date")
var startLoc = $("#start-loc")
var endLoc = $("#end-loc")
var submit = $("#submit")

var pastSearchArray = []
var weatherData = []
var weather
var flightData
var flightCarrierPrice
var localSearchHistory = JSON.parse(localStorage.getItem("history"))
let sampleDate
// let flightAPIDate = ""

var city1 = ''
var city2 = ''

var flights = {
    places: [],
    carriers: [],
    quotes: []
}

$( function() {
    $( "#date" ).datepicker();
})

function startingCity() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=" + startLoc.val(), {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "ed8a1977c6mshff09b4ba3a0ad2ep1ae63bjsnaaca95db666c"
        }
    })
        .then(function (response) {
            return response.json()
        }).then(function (data1) {
            console.log(data1)
            console.log('data1', data1.Places[0].CityId)
            city1 = data1.Places[0].CityId
            endingCity()
        })

}

function endingCity() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=" + endLoc.val(), {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "ed8a1977c6mshff09b4ba3a0ad2ep1ae63bjsnaaca95db666c"
        }
    })
        .then(function (response) {
            return response.json()
        }).then(function (data2) {
            console.log('data2', data2.Places[0].CityId)
            city2 = data2.Places[0].CityId
            quote()
        })
}

function quote() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + city1 + "/" + city2 + "/" + flightAPIDate, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "ed8a1977c6mshff09b4ba3a0ad2ep1ae63bjsnaaca95db666c"
        }
    })
        .then(function (response) {
            return response.json()
        }).then(function (results) {
            //$('#api-container').empty()
            console.log(results.Places)
            for (let i = 0; i < results.Places.length; i++) {
                if (results.Places[i].Type == "Station") {
                    flights.places.push(results.Places[i].Name)
                }
                console.log('Places', results.Places[i])

            } for (let i = 0; i < results.Carriers.length; i++) {
                console.log('Carriers', results.Carriers[i])
                flights.carriers.push(results.Carriers[i].Name)
            } for (let i = 0; i < results.Quotes.length; i++) {
                console.log('Quotes', results.Quotes[i])
                flights.quotes.push(results.Quotes[i].MinPrice)
            }
            console.log(flights.places)
            console.log(flights.carriers)
            console.log(flights.quotes)

            pastSearchArray.push(flights)
            var pastString = JSON.stringify(pastSearchArray)
            localSearchHistory = localStorage.setItem("history", pastString)
            //localStorage.setItem("history", JSON.stringify(flights))
            console.log(localSearchHistory)
        SearchResults()

        })
        .catch(err => {
            console.error(err);
        });

}

//prep the fetch url for different cities
function fetchCity(x, date) {
    fetchURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + x + "&cnt=16&appid=" + api;
    fetchFunc(fetchURL, date);
}

//fetches data from the api and stores it as an array of objects
function fetchFunc(x, theDate) {
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
                    forecastDataObj.cityName = data.city.name;
                    forecastDataObj.date = data.list[index].dt;
                    forecastDataObj.weather = data.list[index].weather[0].description
                    forecastDataObj.weatherIcon = data.list[index].weather[0].icon
                    weatherData.push(forecastDataObj);
                }
                for (let index = 0; index < weatherData.length; index++) {
                    weatherData[index].date = convertedDate = (dayjs.unix(weatherData[index].date)).format("MMM DD, YYYY");
                    weatherData[index].weatherIcon = "http://openweathermap.org/img/wn/" + weatherData[index].weatherIcon + "@2x.png"
                }
                findWeatherAddLocalStorage()
            }

        })

};

/*
find the weather object with same date the user input in the text field and 
return the weather object with the matching date
*/
function findWeatherAddLocalStorage() {
    for (var i = 0; i < weatherData.length; i++) {

        if (weatherData[i].date == dayjs(sampleDate).format("MMM DD, YYYY")) {
            console.log(weatherData[i])
            weather = weatherData[i]
        }
    }
    pastSearchArray.push(weather)
    weatherData = []
    console.log(pastSearchArray)
}

// // if a user comes to the page for the first time local storage is empty
// // set the date, starting location, and ending location to empty strings 
// if (localSearchHistory == null) {
//     pastSearchArray = []
//     localSearchHistory = JSON.parse(pastSearchArray)
//     // date.textContent = ""
//     // startLoc.textContent = ""
//     // endLoc.textContent = ""
// }
// //if local storage is not null aka empty then the user has been on the page before
// //Load their previous information into the "pastSearchArray"
// else {
//     pastSearchArray = localSearchHistory
// }

submit.on("click", function () {

    console.log("Clicked")

    var pastString2
    pastSearchArray = []
    pastString2 = JSON.stringify(pastSearchArray)
    localSearchHistory = localStorage.setItem("history", pastString2)

    // pastSearchArray.push({ date: date.textContent })
    // pastSearchArray.push({ startLoc: startLoc.textContent })
    // pastSearchArray.push({ endLoc: endLoc.textContent })

    // //fetch weather data
    // fetchCity(startLoc.textContent) 

    //fetch flight data
    //startingCity() 

    //do something with the flight data

    // pastSearchArray.push(flightCarrierPrice)

    // localSearchHistory = JSON.stringify(localStorage.setItem("history", pastSearchArray))
    sampleDate = $('#date').val();
    // let regexYear = /\d{4}/
    // let regexMonth = /\d{1,2}-/
    // let regexDay = /-\d{2}-/
    flightAPIDate = dayjs(sampleDate).format("YYYY-MM-DD")


    fetchCity(startLoc.val(), sampleDate)
    fetchCity(endLoc.val(), sampleDate)
    // fetchCity($('#startingCity').val(), sampleDate)
    // fetchCity($('#endingCity').val(), sampleDate)
    startingCity()
   

})

function SearchResults(){
    localSearchHistory = JSON.parse(localStorage.getItem("history"))
    var weather1 = document.createElement('li')
    var weather2 = document.createElement("li")
    var img1 = document.createElement("img")
    var img2 = document.createElement("img")
    var city1 = document.createElement("p")
    var city2 = document.createElement("p")
    
    for (let i=0; i < localSearchHistory[2].quotes.length; i++){
        var quotes = document.createElement("p")
        quotes.textContent = "$" + localSearchHistory[2].quotes[i]
    }

    city1.textContent= localSearchHistory[0].cityName
    city2.textContent= localSearchHistory[1].cityName
    weather1.textContent = localSearchHistory[0].weather
    weather2.textContent = localSearchHistory[1].weather
    img1.setAttribute("src", localSearchHistory[0].weatherIcon)
    img2.setAttribute("src", localSearchHistory[1].weatherIcon)

    document.querySelector("#output1").append(city1)
    document.querySelector("#output1").append(img1)
    document.querySelector("#output1").append(weather1)
    document.querySelector("#output2").append(city2)
    document.querySelector("#output2").append(img2)
    document.querySelector("#output2").append(weather2)
    
    for (let i=0; i < localSearchHistory[2].carriers.length; i++){
        var carriers = document.createElement("h2")
        carriers.textContent = localSearchHistory[2].carriers[i]
        document.querySelector("#flightInfo").append(carriers)

        var quotes = document.createElement("p")
        quotes.textContent = "$" + localSearchHistory[2].quotes[i]
        document.querySelector("#flightInfo").append(quotes)
    }
    
}



// const btnSubmit = document.getElementById("submit");
// const lsOutPut = document.getElementById("lsOutput");

// btnSubmit.onclick = function() {
//     for (let i=0; i < 5; i++)

//     lsOutPut.innerHTML += ${places, carriers, quotes} : ${weatherData, weatherDate};
// } 




