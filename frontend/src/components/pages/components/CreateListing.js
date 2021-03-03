import {useState} from 'react';
import axios from 'axios';

function CreateListing(props) {
  const [text, setText] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [sqft, setSqft] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  }
  const handleBeds = (e) => {
    setBeds(e.target.value);
  }
  const handleBaths = (e) => {
    setBaths(e.target.value);
  }
  const handleSqft = (e) => {
    setSqft(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePhone = (e) => {
    setPhone(e.target.value);
  }
  const createListing = () => {
    setText("");
    setBaths("");
    setBeds("");
    setSqft("");
    setEmail("");
    setPhone("");
    axios.post('http://ec2-18-218-184-96.us-east-2.compute.amazonaws.com:8080/createListing', {
      text: text,
      beds: beds,
      baths: baths,
      sqft: sqft,
      email: email,
      phone: phone,
    }).then(function (response) {
    console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
    <form class="ui form" onSubmit={handleSubmit}>
      <div>
        <label>List your own apartment!</label>
        <input type="text" onChange={handleText} value={text} />
      </div>
      <div>
        <label>How many bedrooms does it have?</label>
        <input type="number" onChange={handleBeds} value={beds} />
      </div>
      <div>
        <label>And how many bathrooms?</label>
        <input type="number" onChange={handleBaths} value={baths} />
      </div>
      <div>
        <label>What about square footage?</label>
        <input type="number" onChange={handleSqft} value={sqft} />
      </div>
      <div>
        <label>What email address can we reach you at?</label>
        <input type="text" onChange={handleEmail} value={email} />
      </div>
      <div>
        <label>Could we get a phone number too?</label>
        <input type="text" onChange={handlePhone} value={phone} />
      </div>
      <p></p>
      <button onClick={createListing} class="ui inverted blue large button">Post Listing</button>
    </form>
    </div>
  )
}

export default CreateListing;
