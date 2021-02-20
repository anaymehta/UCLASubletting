//"Self-invoking anonymous function" - everything is contained within this scope
//Passing in the window and google namespaces into this function scope
(function(window, mapster) {
    //Object Literal, gives us some initial parameters
    var options = mapster.MAP_OPTIONS;
    //Creates our map
    element = document.getElementById('map-canvas');
    map = mapster.create(element, options);
    map.addMarker({
	lat: 37.7,
	lng: -122,
	draggable: true,
	id: 1,
	event: {
	    name: 'click',
	    callback: function() {
		alert("I'm clicked!");
	    }
	}
    });
}(window, window.Mapster || (window.Mapster = {})));
