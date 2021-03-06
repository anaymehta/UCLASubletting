import './propertyList.css';
import Listing from './components/Listing'
import {useState} from 'react'
import CreateListing from './components/CreateListing'
import UserCreation from './components/UserCreation'
import axios from 'axios';

const defaultListings = [
  {
    author: "Anay",
    text: "Landfair 424",
    beds: 2,
    baths: 1,
    sqft: 800,
    email: "kierkegaard@ucla.edu",
    phone: "123456789",
  },
  {
    author: "Chloe",
    text: "Strathmore 989",
    beds: 2,
    baths: 2,
    sqft: 1000,
    email: "camus@ucla.edu",
    phone: "987456789",
  },
  {
    author: "Kashi",
    text: "Roebling 765",
    beds: 1,
    baths: 1,
    sqft: 900,
    email: "sartre@ucla.edu",
    phone: "567891234",
  },
];

function App() {
  const [listings, setListings] = useState(defaultListings)
  const [author, setAuthor] = useState("")

  const createListing = (author, text, beds, baths, sqft, email, phone) => {
    const newListing = {
      author: author,
      text: text,
      beds: beds,
      baths: baths,
      sqft: sqft,
      email: email,
      phone: phone,
    };
    setListings(listings => [...listings, newListing]);
  }

  const createUser = (newAuthor) => {
    setAuthor(newAuthor);
  }

  const getListings = () => {
    axios.get('http://ec2-18-218-184-96.us-east-2.compute.amazonaws.com:8080/getListings')
    .then(function (response) {
      console.log(response.data);
      const jsonListings = response.data;
      jsonListings.map (( listing ) => {
        createListing(listing.author, listing.text, listing.beds, listing.baths, listing.sqft, listing.email, listing.phone);
      })
    }).catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p>Hello{author !== "" && " " + author}!</p>
        <p>Welcome to UCLA Subletters!</p>
        {
          author === "" ?
            <UserCreation createUser={createUser} /> :
            <CreateListing author={author} createListing={createListing} />
        }
        <p></p>
        <button onClick={getListings} class="ui inverted big blue button">Refresh Listings</button>
        <div class="ui stackable three column grid">
        {
          listings.map(( listing ) => {
            
            return <div class="column">
              <Listing 
                author={listing.author} 
                text={listing.text} 
                beds={listing.beds} 
                baths={listing.baths} 
                sqft={listing.sqft} 
                email={listing.email} 
                phone={listing.phone} 
              />
            </div>
          })
        }
        </div>
      </header>
    </div>
  );
}

export default App;