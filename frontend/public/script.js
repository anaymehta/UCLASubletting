//"Self-invoking anonymous function" - everything is contained within this scope
//Passing in the window and google namespaces into this function scope

(function(window, mapster) {
    //Object Literal, gives us some initial parameters
    var options = mapster.MAP_OPTIONS;
    //Creates our map
    element = document.getElementById('map-canvas');
    map = mapster.create(element, options);
    map.restrictBounds(map);

    axios.get('http://ec2-18-218-184-96.us-east-2.compute.amazonaws.com:8080/getListings')
    .then(function (response) {
      for (let i = 0; i < response.data.length; i++)
      {
        map.addMarker(response.data[i].text, 'http://i.stack.imgur.com/g672i.png', response.data[i].description, response.data[i].beds, response.data[i].baths, response.data[i].sqft, response.data[i].email);
      }
    }).catch(function (error) {
      console.log(error);
    });
}(window, window.Mapster || (window.Mapster = {})));
