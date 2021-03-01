import './propertyList.css';
import Listing from './components/Listing'
import {useState} from 'react'
import CreateListing from './components/CreateListing'
import UserCreation from './components/UserCreation'

const defaultListings = [
  {
    author: "Anay",
    body: "Landfair 424",
    beds: 2,
    baths: 1,
    sqft: 800,
    email: "kierkegaard@ucla.edu",
    phone: "123456789",
  },
  {
    author: "Chloe",
    body: "Strathmore 989",
    beds: 2,
    baths: 2,
    sqft: 1000,
    email: "camus@ucla.edu",
    phone: "987456789",
  },
  {
    author: "Kashi",
    body: "Roebling 765",
    beds: 1,
    baths: 1,
    sqft: 900,
    email: "sartre@ucla.edu",
    phone: "567891234",
  },
];

function App() {
  const [listings, setListings] = useState(defaultListings)
  const [username, setUsername] = useState("")

  const createListing = (newListingText, beds, baths, sqft, email, phone) => {
    const newListings = [...listings];
    newListings.push({
      author: username,
      body: newListingText,
      beds: beds,
      baths: baths,
      sqft: sqft,
      email: email,
      phone: phone,
    })
    setListings(newListings)
  }

  const createUser = (newUsername) => {
    setUsername(newUsername);
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>Hello{username !== "" && " " + username}!</p>
        <p>Welcome to UCLA Subletters!</p>
        {
          username === "" ?
            <UserCreation createUser={createUser} /> :
            <CreateListing createListing={createListing} />
        }
        <div class="ui stackable three column grid">
        {
          listings.map(( listing ) => {
            
            return <div class="column">
              <Listing 
                author={listing.author} 
                body={listing.body} 
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
