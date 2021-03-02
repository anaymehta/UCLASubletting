import {useState} from 'react';

function Listing(props) {
  const listingStyle = {
    border: "1px solid white",
    borderRadius: "1em",
    padding: "1em",
    marginTop: "1em",
  };
  const [likes, setLikes] = useState(0);
  const addLike = () => setLikes(likes + 1);
  const [follow, setFollowing] = useState(false);
  const addFollow = () => setFollowing(true);
  return (
    <div style={listingStyle}>
      <p>
        {props.author} is selling: {props.text}
      </p>
      <p> 
        {props.beds}B{props.baths}B, {props.sqft} Square Feet
      </p>
      <p>
        Email: {props.email}
      </p>
      <p>
        Phone: {props.phone}
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
