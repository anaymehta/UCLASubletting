import "./SearchResult.css";
import Listing from './components/Listing'
import {useState} from 'react'
import axios from 'axios';

function getParam(parameterName) {
  let parameters = new URLSearchParams(window.location.search);
  return parameters.get(parameterName);
}

function App() {
  const [listings, setListings] = useState("")

  const createListing = (author, text, beds, baths, sqft, email, phone, description, likes) => {
    const newListing = {
      author: author,
      text: text,
      beds: beds,
      baths: baths,
      sqft: sqft,
      email: email,
      phone: phone,
      description: description,
      likes: likes,
    };
    setListings(listings => [...listings, newListing]);
  }

  const getSearchResults = () => {
    axios.post('http://ec2-18-218-184-96.us-east-2.compute.amazonaws.com:8080/searchListing', {
      search: getParam("addr"),
    }).then(function (response) {
      console.log(response.data);
      const jsonListings = response.data;
      jsonListings.map (( listing ) => {
        createListing(listing.author, listing.text, listing.beds, listing.baths, listing.sqft, listing.email, listing.phone, listing.description, listing.likes);
      })
    }).catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
      {
        // if no listings are currently visible, allow user to ask for them from the server, else display listings
        listings.length === 0 && !getSearchResults()?
          <p>Sorry, we couldn't find any listings by that name :(</p> :
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
                  description={listing.description}
                  likes={listing.likes}
                />
              </div>
            })
          }
          </div>
      }
      </header>
    </div>
  );
}

export default App;