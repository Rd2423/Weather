
$(document).ready(function(){


$("#searchBtn").on('click', function(event){
    event.preventDefault();
    console.log("hey we clicked searchBtn");
    var searchValue = $('.inputTxt').val();
    console.log(searchValue);

    getWeather(searchValue);
    getForecast(searchValue);
})


 function getForecast(searchValue) {
     var apiKey = "f2919f52c14fbeb0be443a2c8704962c";
     var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=" + apiKey;
     console.log("QUERY URL", queryUrl)


     $.ajax({
         url: queryUrl,
         method: "GET"
     }).then(function(reponse){
         console.log("data", reponse)
     })




 }


function getWeather(searchValue){

var apiKey = "f2919f52c14fbeb0be443a2c8704962c";
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&units=metric&appid=" + apiKey;
console.log("QUERY URL", queryUrl)

$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function(data) {

    console.log("This is the data", data)



    $('#currentWeather').empty();
    
    var weatherCardBody = $("<div>").addClass("card-body");
    var weatherCard = $("<div>").addClass("card");
    var nameDiv = $('<div>').addClass("card-header");
    var tempDiv = $("<div>").addClass("card-text");
    var windDiv = $("<div>").addClass("card-text");
    var humidityDiv = $("<div>").addClass("card-text");
    var feelsLikeDiv =$("<div>").addClass("card-text");

    weatherCard.append(weatherCardBody) 
    tempDiv.append(weatherCard)
    windDiv.append(weatherCard)
    humidityDiv.append(weatherCard)
    feelsLikeDiv.append(weatherCard)
    var windData = data.wind.speed;
    var tempData = data.main.temp;
    var humidityData = data.main.humidity;
    var feelsLikeData = data.main.feels_like;
    const daTe = new Date();
    var nameData = data.name + daTe;
    windDiv.text("wind: " + windData)
    tempDiv.text("Temperature: " + tempData)
    feelsLikeDiv.text("Feels like: " + feelsLikeData);
    humidityDiv.text("Humidity: " + humidityData)
    nameDiv.text(nameData);
    console.log(tempData);

    //var date = new date();

    $('#currentWeather').append(nameDiv)
    $('#currentWeather').append(tempDiv)
    $('#currentWeather').append(windDiv)
    $('#currentWeather').append(feelsLikeDiv)
    $('#currentWeather').append(humidityDiv)
    
})




}











})