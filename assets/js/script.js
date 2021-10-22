$('#search-button').on('click', function (event) {
    console.log("js script connected")
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=Seattle", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "ed8a1977c6mshff09b4ba3a0ad2ep1ae63bjsnaaca95db666c"
        }
    })
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log('data', data.Places)

            $('#api-container').empty()
            for (let i = 0; i < data.Places.length; i++) {
                var h1 = $('<h1>')
                var p = $('<p>')
                h1.text(data.Places[i].PlaceName)
                p.text(data.Places[i].RegionId)

                $('#api-container').append(h1, p)
            }
        })
        .catch(err => {
            console.error(err);
        });
    event.preventDefault()
})
