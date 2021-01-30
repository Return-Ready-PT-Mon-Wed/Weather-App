//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PART ONE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Step 1. Creates an XMLHttp Request Object
let xhr = new XMLHttpRequest();
let xhr2 = new XMLHttpRequest();

const zipCode = 19143; //prompt("Enter zip code to get City, State, and Weather?");
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
        console.log(locationResponse);
        console.log(lon);
        console.log(lat);
        document.getElementById('zipCode').innerHTML = city + ", " + state;
    } else if (xhr.status === 404) {
         alert = "404 error, Response Not Found";
    }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PART TWO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

xhr2.onreadystatechange = function() {
    if (xhr2.readyState === 4 && xhr2.status === 200) {
        let weatherResponse = JSON.parse(xhr2.responseText);
        let temp = weatherResponse.dataseries[0].weather;
        console.log(weatherResponse);
        document.getElementById('weather').innerHTML = temp;
    } 
}  
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Step 3. Open request

xhr.open('GET', 'http://api.zippopotam.us/US/'+zipCode);

//Below code returns the incorrect weather type of lightrain when passing the values via declared variables
//xhr2.open('GET', `http://www.7timer.info/bin/api.pl?product=civillight&lon=${lon}&lat=${lat}&output=json`);

//If hard coded, correct weather type is returned
xhr2.open('GET', 'http://www.7timer.info/bin/api.pl?product=civillight&lon=-75.2288&lat=39.9448&output=json');

//Step 4. Send request
function sendAJAX() {
    xhr.send();
    xhr2.send();
  }