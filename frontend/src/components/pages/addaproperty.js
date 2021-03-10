import "./addaproperty.css";
import {useState} from 'react'
import CreateListing from './components/CreateListing'
import UserCreation from './components/UserCreation'

function App() {
  const [author, setAuthor] = useState("")

  const createUser = (newAuthor) => {
    setAuthor(newAuthor);
  }

  document.getElementById("map-canvas").style.display = "none";
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello{author !== "" && " " + author}!</p>
        <p>Welcome to UCLA Subletters!</p>
        {
          author === "" ?
            <UserCreation createUser={createUser} /> :
            <CreateListing author={author} />
        }
      </header>
    </div>
  );
}

export default App;
