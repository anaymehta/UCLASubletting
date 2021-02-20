//This acts as our own library

(function(window, google) {
    //Similar to creating a class (called a "module")
    //We can tack on attributes and functions to this module
    //This is technically not a constructor, it returns a function
    var Mapster = (function() {
	function Mapster(element, opts) {
	    this.gMap = new google.maps.Map(element, opts);
	    this.markers = [];
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
	    //Creates a marker on the map, with arbitrary options
	    _createMarker: function(opts) {
		opts.map= this.gMap;
		return new google.maps.Marker(opts);
	    },
	    addMarker: function(opts) {
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
		if (opts.content) {
		    this._on({
			obj: marker,
			event: 'click',
			callback: function() {
			    var infoWindow = new google.maps.InfoWindow({
				content: opts.content,
			    });

			    infoWindow.open(this.gMap, marker);
			}
		    })
		}
		return marker;
	    },
	    //Adds a marker to the marker array, not to be confused with regular addMarker
	    _addMarker: function(marker) {
		this.markers.push(marker);
	    },
	    _removeMarker: function(marker) {
		var indexOf = this.markers.indexOf(marker);
		if (indexOf != -1) {
		    this.markers.splice(indexOf, 1);
		    marker.setMap(null);
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
