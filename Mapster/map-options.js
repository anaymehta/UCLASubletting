(function(window, google, mapster) {
    mapster.MAP_OPTIONS = {
        center: {
            lat: 37.791350,
            lng: -122.435883,
        },
        zoom: 10,
        disableDefaultUI: true,
        //Here, we set some random options for convenience. We can always revert these changes                                                                                       
        //These values are taken from the google maps API page, I didn't define them myself                                                                                          
        scrollwheel: false,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        maxZoom: 20,
        minZoom: 9,
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
