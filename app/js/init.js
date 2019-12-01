$(document).ready(function(){

    $("#getWeatherByZip").off().on("click",function(){
        searchWeather($("#zipcode").val());
    });

    $(".getWeatherByZip").off().on("click",function(){
        searchWeather($(this).val());
    });

});