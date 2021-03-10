(function(window, google, mapster) {
    mapster.MAP_OPTIONS = {
	center: {
	    //Initial conditions
	    lat: 34.0689,
            lng: -118.4452,
        },
        zoom: 16,
        disableDefaultUI: true,
        //Here, we set some random options for convenience. We can always revert these changes                                                                                       
        //These values are taken from the google maps API page, I didn't define them myself                                                                                          
        scrollwheel: false,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        maxZoom: 20,
        minZoom: 12,
        clickableIcons: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM,
            style: google.maps.ZoomControlStyle.DEFAULT,
        },/*                                                                                                                                                                         
        Haven't quite gotten this to work, but I'll keep it here in case I have a Eureka! moment...                                                                                  
        panControl: true,                                                                                                                                                            
        panControlOptions: {                                                                                                                                                         
            position: google.maps.ControlPosition.LEFT_TOP,                                                                                                                          
        },*/
    };

}(window, google, window.Mapster || (window.Mapster = {})))
