// the view when the map loads
var map = L.map("map").setView([7.376736, 3.939786], 7.5);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

//this is the blue marker
var marker = L.marker([7.376736, 3.939786]).addTo(map);

// the red circle showing radiuus of your position
var circle = L.circle([7.376736, 3.939786], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);
