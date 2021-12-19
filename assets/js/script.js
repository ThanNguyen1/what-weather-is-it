var searchFormEl = document.querySelector('#search-form');
var cityInputEl = document.querySelector('#cityname');

var formSubmitHandler = function(event) {
    // prevents page from refreshing
    event.preventDefault();

    // gets value from the input element
    var cityname = cityInputEl.value.trim();

    if (cityname) {
        console.log(cityname);
        //clear old content
        cityInputEl.value = "";
    } else {
        alert('Please enter in city');
    }
}

//event listeners to form and button container
searchFormEl.addEventListener('submit', formSubmitHandler);