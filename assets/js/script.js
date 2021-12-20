var searchFormEl = document.querySelector('#search-form');
var cityInputEl = document.querySelector('#cityname');
var cityContainerEl = document.querySelector('#city-container');
var citySearchTerm = document.querySelector('#city-search-term');
var cityname = cityInputEl.value.trim();

// captures city search input
var formSubmitHandler = function(event) {
    // prevents page from refreshing
    event.preventDefault();
    var cityname = cityInputEl.value.trim();

    if (cityname) {
        getCityWeather();
        //clear old content
        cityInputEl.value = "";
     } //else {
    //     alert('Please enter in city');
    // }
}

//api request
var getCityWeather = function(city) {
    //format weather api 
    var apiUrl = 
    "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2a40074449a0d62c2af85c67a0f237f5";
    // make a get request to url
    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function(data) {
                    console.log(data);
                    displayWeather(data, city);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function(error) {
            alert('Unable to connect to OpenWeather');
        });
};

var displayWeather = function (weather, searchTerm) {
    // check if api returned weather
    if (weather.length === 0) {
        cityContainerEl.textContent = 'No weather information found.';
    }
    citySearchTerm.textContent = searchTerm;

    // loop over weather info
    for (var i = 0; i <weather.length; i++) {
        var currentWeather = 
            weather[i].name; 
            weather[i].main.temp; 
            weather[i].main.humidity;
    //need to ad UV index from One Call API

    var cityEl = document.createElement('a');
    cityEl.classList = "list-item flex-row justify-space-between";
    cityEl.setAttribute("");

    //create weather cards
        var cardEl = document.createElement('span');
        cardEl.textContent = currentWeather;

    //append to container
        cityEl.appendChild(cardEl);
    //append container to the DOM
        cityContainerEl.appendChild(cityEl);
    }
};
//event listeners to form and button container
searchFormEl.addEventListener('submit', formSubmitHandler);
