var latitude = 0;
var longitude = 0;
var olet_tassa;
var kartta;

if ("geolocation" in navigator) {
  console.log("Sijaintitieto saatavilla");

  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);

    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    console.log('latitude: ' + latitude);
    console.log('longitude: ' + longitude);

    document.getElementById("pituusasteet").innerHTML = latitude;
    document.getElementById("leveysasteet").innerHTML = longitude;

    kartta = L.map('kartta').setWiew([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(kartta);

  });
} else {
  console.log("Sijaintitiedot ei saatavilla");
}
