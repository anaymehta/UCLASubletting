import "./addaproperty.css";
import {useState} from 'react'
import CreateListing from './components/CreateListing'
import UserCreation from './components/UserCreation'

function App() {
  const [username, setUsername] = useState("")

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
            <CreateListing />
        }
      </header>
    </div>
  );
}

export default App;
