// accept cookies

function acceptCookies() {
    let accept = document.querySelector("#cookies")
    accept.remove()
}

// Search for location and pull data from weathermap API

async function locationChange() {
    var city = document.querySelector('.city').value;
    var response = await fetch( "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=fff5ccc58d0a63c089e3b0ff100a7559");
    var data = await response.json();
    console.log(data);
    // adds city name at the top
    document.getElementsByTagName('h2')[0].innerText = city;
    // adds today's date at the top of the weather card
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementsByTagName('h3')[0].innerText = (new Intl.DateTimeFormat('en-US', options).format());
    // adds an image for the current weather
    var icon = data.weather[0].icon
    document.querySelector('#weatherImg').setAttribute ("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");
    // adds a description of the current weather
    document.getElementsByTagName('h4')[0].innerText = data.weather[0].description;
    // displays current temp
    document.querySelector('#currentTemp').innerText = "Current Temperature\n" + data.main.temp_max + "°";
    // displays the high and low temp for the day
    document.querySelector('#high').innerText = data.main.temp_max + "°";
    document.querySelector('#low').innerText = data.main.temp_min + "°";
    return data;
}

// change between celsius and fahrenheit

function celsiusToFahrenheit(temp) {
    return Math.round(9 / 5 * temp + 32)
}

function fahrenheitToCelsius(temp) {
    return Math.round(5 / 9 * (temp - 32))
}

function changeTemp(element) {
    console.log(element.value)
    for(let i=1; i<9; i++) {
        let tempSpan = document.querySelector("#temp" + i);
        let tempVal = parseInt(tempSpan.innerText)
        if(element.value == "°C") {
            tempSpan.innerText = fahrenheitToCelsius(tempVal)
        } else {
            tempSpan.innerText = celsiusToFahrenheit(tempVal)
        }
    }
}

// trigger button when pressing enter key

var input = document.getElementById("city");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
    }
});