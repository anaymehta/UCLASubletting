import {useState} from 'react';

function CreateListing(props) {
  const [text, setText] = useState("");
  const handleInput = (e) => {
    setText(e.target.value);
  }
  const createListing = () => {
    props.createListing(text);
    setText("");
  }
  return (
    <div>
      <p>List your own apartment!</p>
      <input type="text" onChange={handleInput} value={text} />
      <button onClick={createListing}>Post Listing</button>
    </div>
  )
}

export default CreateListing;
