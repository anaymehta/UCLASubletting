import './propertyList.css';
import Listing from './components/Listing'
import {useState} from 'react'
import CreateListing from './components/CreateListing'
import UserCreation from './components/UserCreation'

const defaultListings = [
  {
    author: "Anay",
    body: "Landfair 2B1B",
  },
  {
    author: "Chloe",
    body: "Strathmore 2B2B",
  },
  {
    author: "Kashi",
    body: "Roebling 1B1B",
  },
];

function App() {
  const [listings, setListings] = useState(defaultListings)
  const [username, setUsername] = useState("")

  const createListing = (newListingText) => {
    const newListings = [...listings];
    newListings.push({
      author: username,
      body: newListingText,
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
        {
          listings.map(( listing ) => {
            return <Listing author={listing.author} body={listing.body} />
          })
        }
      </header>
    </div>
  );
}

export default App;
