import {useState} from 'react';

function Listing(props) {
  const listingStyle = {
    border: "1px solid white",
    padding: "1em",
    marginTop: "1em"
  };
  const [likes, setLikes] = useState(0);
  const addLike = () => setLikes(likes + 1);
  return (
    <div style={listingStyle}>
      <p>
        {props.author} is selling: {props.body}
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
      <p>
        number of likes: {likes}
      </p>
      <button onClick={addLike}>+1!</button>
    </div>
  );
}

export default Listing;
