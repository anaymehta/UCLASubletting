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
      	console.log(map.addMarker(response.data[i].text, 'http://i.stack.imgur.com/g672i.png', "sample text"));
      }
    }).catch(function (error) {
      console.log(error);
    });

    map.addMarker("10740 Dickson Ct, Los Angeles, CA 90095", 'images/powell.png', 'Study here');
    map.addMarker("Los Angeles, CA 90095",'http://i.stack.imgur.com/g672i.png','Leeeell');
    
}(window, window.Mapster || (window.Mapster = {})));
