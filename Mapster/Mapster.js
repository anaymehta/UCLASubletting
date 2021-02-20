//This acts as our own library

(function(window, google) {
    //Similar to creating a class (called a "module")
    //We can tack on attributes and functions to this module
    //This is technically not a constructor, it returns a function
    var Mapster = (function() {
	function Mapster(element, opts) {
	    this.gMap = new google.maps.Map(element, opts);
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
		if (opts.event) {
		    this._on({
			obj: marker,
			event: opts.event.name,
			callback: opts.event.callback,
		    });
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
