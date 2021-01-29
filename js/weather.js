//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PART ONE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Step 1. Creates an XMLHttp Request Object
let xhr = new XMLHttpRequest();
let xhrTwo = new XMLHttpRequest();
let zipCode = 90210; //prompt("Enter zip code to get City, State, and Weather?");
let lon;
let lat;

//Step 2. Create a callback function (Asyncronous)
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let locationResponse = JSON.parse(xhr.responseText);
        lon = locationResponse.places[0].longitude;
        lat = locationResponse.places[0].latitude;
        let city = locationResponse.places[0]["place name"];
        let state = locationResponse.places[0]["state abbreviation"];
        // console.log(locationResponse);
        console.log(lon);
        console.log(lat);
        document.getElementById('zipCode').innerHTML = city + ", " + state;
    } else if (xhr.status === 404) {
         alert = "404 error, Response Not Found";
    }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PART TWO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

xhrTwo.onreadystatechange = function() {
    if (xhrTwo.readyState === 4 && xhrTwo.status === 200) {
        let weatherResponse = JSON.parse(xhrTwo.responseText);
        let temp = weatherResponse.dataseries[0].weather;
        console.log(weatherResponse);
        document.getElementById('weather').innerHTML = temp;
    } 
}  
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Step 3. Open request
xhr.open('GET', 'http://api.zippopotam.us/US/'+zipCode);
//xhrTwo.open('GET', 'http://www.7timer.info/bin/api.pl?product=civillight&output=json&lon=' + lon + "&lat=" + lat);
xhrTwo.open('GET', 'http://www.7timer.info/bin/api.pl?product=civillight&output=json&lon=-118.4065&lat=34.0901');

//Step 4. Send request
function sendAJAX() {
    xhr.send();
    xhrTwo.send();
  }