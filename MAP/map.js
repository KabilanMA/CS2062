const button = document.getElementById("location");

button.addEventListener("click", () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else {
        console.log("geolocation not supported");
    }
});

function showPosition(position){
    console.log("Longitude: "+ position.coords.longitude);
    console.log("Latitude: "+ position.coords.latitude);
}

function getDistance(lat1, lon1, lat2, lon2) {
    var R = 6371;
    var dLat = deg2rad(lat2-lat1);
    var dLon = deg2rad(lon2-lon1);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);

    var c = 2 * Math
}

var map;

function initMap() {
  // The map, centered on Central Park
  const center = {lat: 6.9270786, lng: 79.861243};
  const options = {zoom: 8, scaleControl: true, center: center};
  map = new google.maps.Map(
      document.getElementById('map'), options);
  // Locations of landmarks
  const dakota = {lat: 6, lng: 6.9761399};
  const frick = {lat: 40.771209, lng: -73.9673991};
  // The markers for The Dakota and The Frick Collection
  var mk1 = new google.maps.Marker({position: dakota, map: map});
  var mk2 = new google.maps.Marker({position: frick, map: map});
}