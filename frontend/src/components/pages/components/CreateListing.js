import './CreateListing.css'
import {useState} from 'react';
import axios from 'axios';
import Cookies from "js-cookie";

function CreateListing(props) {
  const [text, setText] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [sqft, setSqft] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
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
  const handleDescription = (e) => {
    setDescription(e.target.value);
  }
  const createListing = () => {
    setText("");
    setBaths("");
    setBeds("");
    setSqft("");
    setEmail("");
    setPhone("");
    setDescription("");
    // axios.post('http://127.0.0.1:8080/createListing', { // local server
    axios.post('http://ec2-18-218-184-96.us-east-2.compute.amazonaws.com:8080/createListing', {
      token: Cookies.get('user'),
      author: props.author,
      text: text,
      beds: beds,
      baths: baths,
      sqft: sqft,
      email: email,
      phone: phone,
      description: description,
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
        <label>Enter the name of your listing.</label>
        <input type="text" placeholder="Listing name" onChange={handleText} value={text} />
      </div>
      <p></p>
      <div class="two fields">
        <div class="field"><label>How many bedrooms?</label>
        <div class="ui input"><input type="text" placeholder="Enter a number" onChange={handleBeds} value={beds} />
        </div></div>
        <div class="field"><label>How many bathrooms?</label>
        <div class="ui input"><input type="text" placeholder="Enter a number" onChange={handleBaths} value={baths} />
        </div></div></div>
      <div>
        <label>How many square feet?</label>
        <input type="text" placeholder="Enter a number" onChange={handleSqft} value={sqft} />
      </div>
      <p></p>
      <div>
        <label>What is your email address?</label>
        <input type="text" placeholder="joebruin@gmail.com" onChange={handleEmail} value={email} />
      </div>
      <p></p>
      <div>
        <label>What is your phone number?</label>
        <input type="text" placeholder="111-111-1111" onChange={handlePhone} value={phone} />
      </div>
      <p></p>
      <div>
        <label>Please enter a description.</label>
        <textarea type="text" placeholder="Description" onChange={handleDescription} value={description} />
      </div>

      <p></p>
      <span class="tab3"></span>
      <button onClick={createListing} class="ui inverted blue large button">Post Listing</button>
      <p></p>
    </form>
    </div>
  )
}

export default CreateListing;