var city1 = ''
var city2 = ''
function startingCity() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=" + $('#startingCity').val(), {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "ed8a1977c6mshff09b4ba3a0ad2ep1ae63bjsnaaca95db666c"
        }
    })
        .then(function (response) {
            return response.json()
        }).then(function (data1) {
            console.log('data1', data1.Places[0].CityId)
            city1 = data1.Places[0].CityId
            endingCity()
        })

}

function endingCity() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=" + $('#endingCity').val(), {
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
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + city1 + "/" + city2 + "/" + $('#date').val(), {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "ed8a1977c6mshff09b4ba3a0ad2ep1ae63bjsnaaca95db666c"
        }
    })
        .then(function (response) {
            return response.json()
        }).then(function (results) {
            $('#api-container').empty()
            for (let i = 0; i < results.Places.length; i++) {
                console.log('Places', results.Places[i])
            } for (let i = 0; i < results.Carriers.length; i++) {
                console.log('Carriers', results.Carriers[i])
            } for (let i = 0; i < results.Quotes.length; i++) {
                console.log('Quotes', results.Quotes[i])
            }
        })
        .catch(err => {
            console.error(err);
        });
}

$('#sudmit').on('click', function (event) {
    startingCity()
    event.preventDefault()
});