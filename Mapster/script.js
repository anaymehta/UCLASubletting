//"Self-invoking anonymous function" - everything is contained within this scope
//Passing in the window and google namespaces into this function scope
(function(window, mapster) {
    //Object Literal, gives us some initial parameters
    var options = mapster.MAP_OPTIONS;
    //Creates our map
    element = document.getElementById('map-canvas');
    map = mapster.create(element, options);
    var marker1 = map.addMarker({
	lat: 34.068,
	lng: -118.445,
	icon: 'images/logo.png',
	window: {
	    img: 'http://i.stack.imgur.com/g672i.png',
	    str: 'This is a house that costs 100 million dollats hahaha get fucked',
	}
	//content: "<img src='http://i.stack.imgur.com/g672i.png'><p>This is a house that costs 100 million dollats hahaha get fucked<//p>",
	//content: 'This is a house that costs 100 million dollars hahaha get fucked',
	/*event: {
	    name: 'click',
	    callback: function() {
		alert("I'm clicked!");
	    }
	}*/
    });
    map.restrictBounds(map);
}(window, window.Mapster || (window.Mapster = {})));
