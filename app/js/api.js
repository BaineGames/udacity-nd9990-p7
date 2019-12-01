var apiKey = "a45cb771a5dffe71949bf6e3b740e673";

function searchWeather(zipcode){

    var settings = {
        "async": true,
        "url": "https://api.openweathermap.org/data/2.5/weather?units=metric&zip="+zipcode+"&appid="+apiKey,
        "method": "GET",
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        renderCurrentWeather(response);
        //forcast5day(zipcode);
    });

}

function forcast5day(zipcode){

    var settings = {
        "async": true,
        "url": "https://api.openweathermap.org/data/2.5/forecast?units=metric&zip="+zipcode+"&appid="+apiKey,
        "method": "GET",
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

}

function renderCurrentWeather(data){
    $("#currentName").text("Weather for " + data.name);
    $("#currentTemp").text("It is currently " + data.main.temp + " C");
    $("#currentTempLow").text("With a low of " + data.main.temp_min + " C");
    $("#currentTempHigh").text("And a high of " + data.main.temp_max + " C");
    $("#currentHumidity").text("Current humidity at " + data.main.humidity + "%");
    $("#currentPressure").text("Current pressure of " + data.main.pressure + "mm of Mercury");
    $("#currentWind").text("Wind speed of " + data.wind.speed + "kph @ " + data.wind.deg + " degrees");
}