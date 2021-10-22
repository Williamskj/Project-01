console.log("js script connected")
var date = document.querySelector("date")
var startLoc = document.querySelector("start-loc")
var endLoc = document.querySelector("end-loc")
var submit = docuement.querySelector("submit")
var pastSearchArray = []
var weatherData = []
var weather
var flightData
var flightCarrierPrice 

var localSearchHistory = JSON.parse(localStorage.getItem("history"))

//if a user comes to the page for the first time local storage is empty
//set the date, starting location, and ending location to empty strings 
if(localSearchHistory == null) {
    pastSearchArray = []
    localSearchHistory = pastSearchArray
    date.textContent = ""
    startLoc.textContent = ""
    endLoc. textContent = ""
}
//if local storage is not null aka empty then the user has been on the page before
//Load their previous information into the "pastSearchArray"
else {
    pastSearchArray = localSearchHistory
}

submit.addEventListener("click", function () {


    pastSearchArray.push({date: date.textContent})
    pastSearchArray.push({startLoc: startLoc.textContent})
    pastSearchArray.push({endLoc: endLoc.textContent})

    //fetch weather



    //fetch flight data 

    //find the weather object with same date the user input in the text field and return the weather object with the matching date 
    for(var i = 0; i < sampleData.length; i++) {
        if(weatherData[i].date == date){
            weather = weatherData[i]
        }
    }
    pastSearchArray.push(weather)

    //do something with the flight data 
    pastSearchArray.push(flightCarrierPrice)

    localSearchHistory = JSON.stringify(localStorage.setItem("history", pastSearchArray))

}) 







