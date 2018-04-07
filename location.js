window.addEventListener("load", function () {
    var div = document.getElementById("map");
    var lat = div.getAttribute("data-lat");
    var lng = div.getAttribute("data-lng");
    var tit = div.getAttribute("data-title");

    var map = L.map(div).setView([lat, lng], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map).bindPopup(tit).openPopup();
});