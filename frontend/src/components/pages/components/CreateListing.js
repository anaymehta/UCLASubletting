import {useState} from 'react';
import axios from 'axios';
import React, {Component} from 'react';

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
    axios.post('http://127.0.0.1:8080/createListing', {
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
        <input type="text" onChange={handleText} value={text} />
      </div>
      <div>
        <label>How many bedrooms?</label>
        <input type="number" onChange={handleBeds} value={beds} />
      </div>
      <div>
        <label>How many bathrooms?</label>
        <input type="number" onChange={handleBaths} value={baths} />
      </div>
      <div>
        <label>How many square feet?</label>
        <input type="number" onChange={handleSqft} value={sqft} />
      </div>
      <div>
        <label>What is your email address?</label>
        <input type="text" onChange={handleEmail} value={email} />
      </div>
      <div>
        <label>What is your phone number?</label>
        <input type="text" onChange={handlePhone} value={phone} />
      </div>
      <div>
        <label>Please enter a description.</label>
        <textarea type="text" onChange={handleDescription} value={description} />
      </div>

      <div>
        <label>Please upload a photo.</label>
      </div>


      <p></p>
      <button onClick={createListing} class="ui inverted blue large button">Post Listing</button>
    </form>
    </div>
  )
}

export default CreateListing;