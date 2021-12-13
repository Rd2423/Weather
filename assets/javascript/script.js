
$(document).ready(function(){


$("#searchBtn").on('click', function(event){
    event.preventDefault();
    console.log("hey we clicked searchBtn");
    var searchValue = $('.inputTxt').val();
    console.log(searchValue);

    getWeather(searchValue);
    getForecast(searchValue);
})
    
    $("#searchBtn").addEventListener("keyup", function(event){
    event.preventDefault();
    console.log("hey we clicked searchBtn");
    var searchValue = $('.inputTxt').val();
    console.log(searchValue);

    getWeather(searchValue);
    getForecast(searchValue);
})


 function getForecast(searchValue) {
     var apiKey = "f2919f52c14fbeb0be443a2c8704962c";
     var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&units=metric&appid=" + apiKey;
     console.log("QUERY URL", queryUrl)


     $.ajax({
         url: queryUrl,
         method: "GET"
     }).then(function(response){


         console.log("data", response)


        


//for(var i = 0; i < 5; i++){
        var weatherCardBody = $("<div>").addClass("card-body");
         var weatherCard = $("<div>").addClass("card");
         var tempDiv = $("<div>").addClass("card-text");
         var windDiv = $("<div>").addClass("card-text");
         var humidityDiv = $("<div>").addClass("card-text");
         


         


        weatherCard.append(weatherCardBody) 
        tempDiv.append(weatherCard)
        windDiv.append(weatherCard)
        humidityDiv.append(weatherCard)

        var tempData = response.list[0].main.temp;
        var humidityData = response.list[0].main.humidity;
        var windData = response.list[0].wind.speed;

        

        tempDiv.text("Temp: " + tempData + "c");
        windDiv.text("wind: " + windData);
        humidityDiv.text("Humidity: " + humidityData + "%");



        $('#forecast').append(tempDiv);
        $('#forecast').append(windDiv);
        $('#forecast').append(humidityDiv);
    
    





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
    var nameData = data.name;
    windDiv.text("wind: " + windData)
    tempDiv.text("Temperature: " + tempData + "c")
    feelsLikeDiv.text("Feels like: " + feelsLikeData);
    humidityDiv.text("Humidity: " + humidityData);
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
