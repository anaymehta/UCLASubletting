import "./addaproperty.css";
import {useState} from 'react'
import CreateListing from './components/CreateListing'
import UserCreation from './components/UserCreation'

function App() {
  const [author, setAuthor] = useState("")

  const createUser = (newAuthor) => {
    setAuthor(newAuthor);
  }

  return (
    <div className="App">
      <header className="App-header">
      <p></p> <p></p>
        <p>Hello{author !== "" && " " + author}!
        Welcome to UCLA Subletters!</p>
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
