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
