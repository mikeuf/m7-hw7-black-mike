
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

      var welcomeHeader = document.getElementById('welcome-header');
      welcomeHeader.insertAdjacentText('beforeend', apiResult.name);

      var weatherMessage = document.getElementById('weather-message');
      var weatherDescription = document.createTextNode(apiResult.weather[0].description);
      weatherMessage.appendChild(weatherDescription);
    }
};


xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=32713,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();


