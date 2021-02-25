import {useState} from 'react';

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
    props.createListing(text, beds, baths, sqft, email, phone);
    setText("");
    setBaths("");
    setBeds("");
    setSqft("");
    setEmail("");
    setPhone("");
  }
  return (
    <div>
        <p>List your own apartment!</p>
        <input type="text" onChange={handleText} value={text} />
        <p>How many bedrooms does it have?</p>
        <input type="number" onChange={handleBeds} value={beds} />
        <p>And how many bathrooms?</p>
        <input type="number" onChange={handleBaths} value={baths} />
        <p>What about square footage?</p>
        <input type="number" onChange={handleSqft} value={sqft} />
        <p>What email address can we reach you at?</p>
        <input type="text" onChange={handleEmail} value={email} />
        <p>Could we get a phone number too?</p>
        <input type="text" onChange={handlePhone} value={phone} />
        <p>We're good to go, just hit post!</p>
        <button onClick={createListing}>Post Listing</button>
    </div>
  )
}

export default CreateListing;
