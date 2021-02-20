//"Self-invoking anonymous function" - everything is contained within this scope
//Passing in the window and google namespaces into this function scope
(function(window, mapster) {
    //Object Literal, gives us some initial parameters
    var options = mapster.MAP_OPTIONS;
    //Creates our map
    element = document.getElementById('map-canvas');
    map = mapster.create(element, options);
    var marker1 = map.addMarker({
	lat: 37.7,
	lng: -122,
	icon: 'images/logo.png',
	content: 'Description here',
	event: {
	    name: 'click',
	    callback: function() {
		alert("I'm clicked!");
	    }
	}
    });
    var marker2 = map.addMarker({
	lat: 37.9,
	lng: -122,
	icon: 'images/logo.png',
	event: {
	    name: 'click',
	    callback: function() {
		alert("Clicked!");
	    }
	}
    });
    var marker3 = map.addMarker({
	lat: 37.7,
	lng: -122.2,
	icon: 'images/logo.png',
	event: {
	    name: 'click',
	    callback: function() {
		alert("also clicked!");
	    }
	}
    });
    map._removeMarker(marker2);
    var found = map.findMarkerByLat(37.7);
    console.log(found);
    console.log(map.markers);
}(window, window.Mapster || (window.Mapster = {})));
