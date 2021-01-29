//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PART ONE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Step 1. Creates an XMLHttp Request Object
let xhr = new XMLHttpRequest();
let xhrTwo = new XMLHttpRequest();

// commented out until part 2 is completed - let zipCode = prompt("What is your zip code?");

setLocation();

//Step 2. Create a callback function (Asyncronous)
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let locationResponse = JSON.parse(xhr.responseText);
        let latitude = locationResponse.places[0].latitude;
        let longitude = locationResponse.places[0].longitude;
        //console.log(locationResponse);
        document.getElementById('zipCode').innerHTML = locationResponse.places[0]["place name"] + ", " + locationResponse.places[0]["state abbreviation"];
    } else if (xhr.status === 404) {
         alert = "404 error, Response Not Found";
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PART TWO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

xhrTwo.onreadystatechange = function() {
    if (xhrTwo.readyState === 4 && xhrTwo.status === 200) {
        let weatherResponse = JSON.parse(xhrTwo.responseText);
        console.log(weatherResponse);
        document.getElementById('weather').innerHTML = weatherResponse;
    } 
}  
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Step 3. Open request
xhr.open('GET', 'http://api.zippopotam.us/US/' + zipCode);
xhr.open('GET', 'http://www.7timer.info/bin/api.pl');

//Step 4. Send request
function sendAJAX() {
    xhr.send();
  }

function setLocation() {
    let zipCode 
  }