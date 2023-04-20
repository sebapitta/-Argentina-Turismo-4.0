let map = L.map('map').setView([-40.039678, -67.250494], 6);

let osm =L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

osm.addTo(map);

let marker

marker = L.marker([-41.071300, -71.161822],{title:'Dina Huapi'}).addTo(map).bindPopup('<h6>Dina Huapi</h6>')
marker = L.marker([-41.966113, -71.529783], { title: 'El Bolsón' }).addTo(map).bindPopup('<img src="../img/logo.png"/><h6>El Bolsón</h6>')
marker = L.marker([-41.600367, -71.7560286],{title:'El Manso'}).addTo(map).bindPopup('<h6>El Manso</h6>')
marker = L.marker([-41.141197, -71.302846],{title:'Bariloche'}).addTo(map).bindPopup('<h6>San Carlos de Bariloche</h6>')



  