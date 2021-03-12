//This acts as our own library

(function(window, google) {
    //Similar to creating a class (called a "module")
    //We can tack on attributes and functions to this module
    //This is technically not a constructor, it returns a function
    var Mapster = (function() {
	function Mapster(element, opts) {
	    this.gMap = new google.maps.Map(element, opts);
	    this.gCoder = new google.maps.Geocoder();
	    this.lat = 0;
	    this.markers = [];
	    this.lastInfoWindow = 0;
	}

	Mapster.prototype = {
	    /*
	    We define our functions on mapster here. We could either call these functions from the google API
	    or we could (if we use it often) just define it here
	    */
	    //Links an arbitrary event to an arbitrary callback
	    _on: function(opts) {
		var self = this;
		google.maps.event.addListener(opts.obj, opts.event, function(e) {
		    opts.callback.call(self, e);
		}); 
	    },
	    //DONT USE THIS
	    //Creates a marker on the map, with arbitrary options
	    _createMarker: function(opts) {
		opts.map= this.gMap;
		return new google.maps.Marker(opts);
	    },
	    //DONT USE THIS
	    placeMarker: function(opts) {
		var marker;
		opts.position = {
		    lat: opts.lat,
		    lng: opts.lng
		}
		marker = this._createMarker(opts);
		this._addMarker(marker);
		if (opts.event) {
		    this._on({
			obj: marker,
			event: opts.event.name,
			callback: opts.event.callback,
		    });
		}
		//If we add a content string, it will display in the info box
		if (opts.window) {
		    this._on({
			obj: marker,
			event: 'click',
			callback: function() {
			    console.log(this.lastInfoWindow);
			    if (this.lastInfoWindow != 0)
			    {
			    	this.lastInfoWindow.close();
			    }
			    var infoWindow = new google.maps.InfoWindow({
				content:
				`<div style="text-align: CENTER">
                                     <img src="${opts.window.img}"'></img>
                                 </div>
                                 <p>${opts.window.str}</p>`,
			    });
			    //Pans to the marker when clicked
			    marker.getMap().panTo(marker.getPosition());
			    infoWindow.open(this.gMap, marker);
			    console.log(infoWindow)
				this.lastInfoWindow = infoWindow;
			}
		    })
		}
		return marker;
	    },
	    //Adds a marker to the marker array, not to be confused with regular addMarker. DONT USE THIS
	    _addMarker: function(marker) {
		this.markers.push(marker);
	    },
	    //Removes a given marker
	    _removeMarker: function(marker) {
		var indexOf = this.markers.indexOf(marker);
		if (indexOf != -1) {
		    this.markers.splice(indexOf, 1);
		    marker.setMap(null);
		}
	    },
	    removeMarker: function(address) {
		var found = false;
		for (var i = 0; i < this.markers.length; i++)
		{
		    if (this.markers[i].address == address)
		    {
			found = true;
			this._removeMarker(this.markers[i]);
			break;
		    }
		}
		if (!found)
		{
		    console.log("Could not find requested marker by address to delete");
		}
	    },
	    //Finds marker by attribute, in this case, lat. In the future, we can change this to be something more useful, like perhaps description
	    findMarkerByLat: function(lat) {
		var i = 0;
		for(; i < this.markers.length; i++)
		{
		    var marker = this.markers[i];
		    if (marker.position.lat() == lat){
			return marker;
		    }
		}
	    },
	    //User won't be able to pan outside this region
	    restrictBounds: function(map) {
		//Ensures user cannot scroll outside of these bounds
		lngMin = -118.9452;
		lngMax = -117.9452;
		latMin = 34.0189;
		latMax = 35.0189;
		var lastValidLat;
		var lastValidLng;
		google.maps.event.addListener(map.gMap, 'drag', function(){
		    var lat = map.gMap.getCenter().lat();
		    var lng = map.gMap.getCenter().lng();
		    if (lat > latMin && lat < latMax && lng > lngMin && lng < lngMax) {
                        lastValidLat = lat;
                        lastValidLng = lng;
			lat = map.gMap.getCenter().lat();
			lng = map.gMap.getCenter().lng();
                        return;
                    }
                    map.gMap.panTo({lat: lastValidLat, lng: lastValidLng});
		});
	    },
	    /*
	    This is the main function we'll use to add a marker. Given an address, 
	    image, and string, it will create a marker at that address with the
	    image and string displayed. Also, when the marker is clicked, it will
	    pan to the marker and center it. Also has a link so we can go to another
	    page, I have google.com as a placeholder
	    */
	    addMarker: function(address, img, desc, bdr, bath, sqft, contact) {
		this.gCoder.geocode({'address': address}, function(results, status) {
		    if (status == google.maps.GeocoderStatus.OK) {
			map.placeMarker({
			    lat: results[0].geometry.location.lat(),
			    lng: results[0].geometry.location.lng(),
			    icon: 'images/logo.png',
			    address: address,
			    window: {
				img: img,
				str: `<b>${address}</b></br>` +
				`${desc}</br>` + 
				`${bdr} beds, ${bath} baths</br>` +
				`${sqft} square feet</br>` +
				`Contact: ${contact}`,
			    }
			})
		    }
		});
	    }
	    
	};
	return Mapster;
    }());

    //Factory function, we want to create a new map
    Mapster.create = function(element, opts) {
	return new Mapster(element, opts);
    };
    //Attatches mapster to the window
    window.Mapster = Mapster;
    
}(window, google))
