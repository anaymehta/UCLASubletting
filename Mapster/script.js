//"Self-invoking anonymous function" - everything is contained within this scope
//Passing in the window and google namespaces into this function scope
(function(window, google, mapster) {
    //Object Literal, gives us some initial parameters
    var options = mapster.MAP_OPTIONS
    //Creates our map
    element = document.getElementById('map-canvas'),
    map = new google.maps.Map(element, options);	
}(window, google, window.Mapster || (window.Mapster = {})));
