import {useState} from 'react';
import axios from 'axios';

function Listing(props) {
  const listingStyle = {
    border: "1px solid white",
    borderRadius: "1em",
    padding: "1em",
    marginTop: "1em",
  };
  const [likes, setLikes] = useState(props.likes ? props.likes : 0); // backwards compatability
  const addLike = () => {
    setLikes(likes + 1);
    axios.post('http://ec2-18-218-184-96.us-east-2.compute.amazonaws.com:8080/addLike', {
      name: props.text,
    }).then(function (response) {
    console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    });
  }
  const [follow, setFollowing] = useState(false);
  const addFollow = () => setFollowing(true);
  return (
    <div style={listingStyle}>
      <p>
        {props.author} is selling: {props.text}
      </p>
      <p> 
        {props.beds} Bed {props.baths} Bath, {props.sqft} Square Feet
      </p>
      <p>
        Email: {props.email}
      </p>
      <p>
        Phone: {props.phone}
      </p>
      <p>
        Description: {props.description}
      </p>
      <div>
        <div class="ui labeled button">
          <button onClick={addLike} class="ui red button" tabindex="0">
            <i aria-hidden="true" class="heart icon"></i> 
            Like
          </button>
          <div class="ui red left pointing basic label">
            {likes}
          </div>
        </div>
        <button onClick={addFollow} class="ui primary button">{follow ? "Followed!": "Follow this listing!"}</button>
      </div>
      <p />
    </div>
  );
}

export default Listing;