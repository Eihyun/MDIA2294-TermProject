// hamburger menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuIcon.classList.toggle('hide');
    closeIcon.classList.toggle('hide');
});

// Parallax

$('.parallax-window').parallax({
    naturalWidth: 600,
    naturalHeight: 400
});

$(window).trigger('resize').trigger('scroll');

// Leaflet
var map = L.map('map').setView([34.136, -118.355], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([34.136, -118.355]).addTo(map);

marker.bindPopup("<b>Neighborhood</b><br>12358W").openPopup();

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);