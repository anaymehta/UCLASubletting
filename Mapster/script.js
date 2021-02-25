//"Self-invoking anonymous function" - everything is contained within this scope
//Passing in the window and google namespaces into this function scope
(function(window, mapster) {
    //Object Literal, gives us some initial parameters
    var options = mapster.MAP_OPTIONS;
    //Creates our map
    element = document.getElementById('map-canvas');
    map = mapster.create(element, options);
    map.restrictBounds(map);

    map.addMarker("10740 Dickson Ct, Los Angeles, CA 90095", 'https://s3-media4.fl.yelpcdn.com/bphoto/4NRxlHWP8VeVPuB1WMEpvQ/o.jpg', 'Study here');
    map.addMarker("Los Angeles, CA 90095",'http://i.stack.imgur.com/g672i.png','Leeeell');
}(window, window.Mapster || (window.Mapster = {})));
