function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: { lat: 42.360082, lng: -71.058880 },
        mapTypeId: 'satellite'
    });

    setMarkers(map);
}

function setMarkers(map) {

    var stores = [
        ['Chev Boston', 42.360082, -71.058880, 4],
        ['Excellence Motor1', 42.359979, -71.056765, 5],
        ['Excellence Motor2', 42.360487, -71.055201, 3],
        ['Excellence Motor3', 42.360027, -71.056159, 1]
    ];

    for (var i = 0; i < stores.length; i++) {
        prepareMarker(stores[i], map);
    }

}

function prepareMarker(store, map) {
    var image = {
        url: 'car2.png',
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32)
    };

    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };

    var marker = new google.maps.Marker({
        position: { lat: store[1], lng: store[2] },
        map: map,
        icon: image,
        shape: shape,
        title: store[0],
        zIndex: store[3]
    });

    var content = store[0] + "<div><a target='_blank' href=''>Buy Now</a></div>";

    google.maps.event.addListener(marker, "click", function () {
        new google.maps.InfoWindow({ content: content }).open(map, marker);
    });
}