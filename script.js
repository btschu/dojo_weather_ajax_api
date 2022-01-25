// accept cookies

function acceptCookies() {
    let accept = document.querySelector("#cookies")
    accept.remove()
}

// Search for location and pull data from weathermap API

async function locationChange() {
    var city = document.querySelector('.city').value;
    var response = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=fff5ccc58d0a63c089e3b0ff100a7559");
    var data = await response.json();
    console.log(data);
    console.log(city);
    document.getElementsByTagName('h2')[0].innerText = city;
    document.getElementsByTagName('h3')[0].innerText = list.dt;
    // document.getElementsByTagName('img')[0].setAttribute("src", data.avatar_url);
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

