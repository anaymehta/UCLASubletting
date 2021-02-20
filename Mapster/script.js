//"Self-invoking anonymous function" - everything is contained within this scope
//Passing in the window and google namespaces into this function scope
(function(window, google) {
    //Object Literal, gives us some initial parameters
    var options = {
	center: {
	    lat: 37.791350,
	    lng: -122.435883,
	},
	zoom: 10
    },
    //Creates our map
    element = document.getElementById('map-canvas'),
    map = new google.maps.Map(element, options);	
}(window, google))
