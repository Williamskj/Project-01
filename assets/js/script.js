console.log("js script connected")

//api key
let api = "67e5d9a31580eecf6ceba074d4645128";

//input vars
let sampleDate = '11/05/2021';

//placeholder vars
let forecastData = [];
let fetchURL;


//prep the fetch url for different cities
function prepFetchURL(x) {
    fetchURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + x + "&cnt=16&appid=" + api;
    fetchFunc(fetchURL);
}

//fetches data from the api
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
                for (let index = 0; index < forecastData.length; index++) {
                    forecastData[index].date = convertedDate = (dayjs.unix(forecastData[index].date)).format("MMM DD, YYYY");
                    forecastData[index].weatherIcon = "http://openweathermap.org/img/wn/" + forecastData[index].weatherIcon + "@2x.png"
                }
                console.log(forecastData)
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

prepFetchURL("Sad");


// var sampleData = [
//     { date: 'Oct 21, 2021', weather: 'heavy intensity rain', weatherIcon: 'http://openweathermap.org/img/wn/10d@2x.png' },
//     { date: 'Oct 22, 2021', weather: 'heavy intensity rain', weatherIcon: 'http://openweathermap.org/img/wn/10d@2x.png' },
//     { date: 'Oct 23, 2021', weather: 'light rain', weatherIcon: 'http://openweathermap.org/img/wn/10d@2x.png' },
//     { date: 'Oct 24, 2021', weather: 'moderate rain', weatherIcon: 'http://openweathermap.org/img/wn/10d@2x.png' },
//     { date: 'Oct 25, 2021', weather: 'light rain', weatherIcon: 'http://openweathermap.org/img/wn/10d@2x.png' },
//     { date: 'Oct 26, 2021', weather: 'moderate rain', weatherIcon: 'http://openweathermap.org/img/wn/10d@2x.png' },
//     { date: 'Oct 27, 2021', weather: 'moderate rain', weatherIcon: 'http://openweathermap.org/img/wn/10d@2x.png' },
//     { date: 'Oct 28, 2021', weather: 'moderate rain', weatherIcon: 'http://openweathermap.org/img/wn/10d@2x.png' },
//     { date: 'Oct 29, 2021', weather: 'sky is clear', weatherIcon: 'http://openweathermap.org/img/wn/01d@2x.png' },
//     { date: 'Oct 30, 2021', weather: 'moderate rain', weatherIcon: 'http://openweathermap.org/img/wn/10d@2x.png' },
//     { date: 'Oct 31, 2021', weather: 'moderate rain', weatherIcon: 'http://openweathermap.org/img/wn/10d@2x.png' },
//     { date: 'Nov 01, 2021', weather: 'heavy intensity rain', weatherIcon: 'http://openweathermap.org/img/wn/10d@2x.png' },
//     { date: 'Nov 02, 2021', weather: 'moderate rain', weatherIcon: 'http://openweathermap.org/img/wn/10d@2x.png' },
//     { date: 'Nov 03, 2021', weather: 'light rain', weatherIcon: 'http://openweathermap.org/img/wn/10d@2x.png' },
//     { date: 'Nov 04, 2021', weather: 'light rain', weatherIcon: 'http://openweathermap.org/img/wn/10d@2x.png' },
//     { date: 'Nov 05, 2021', weather: 'light rain', weatherIcon: 'http://openweathermap.org/img/wn/10d@2x.png' }
// ]