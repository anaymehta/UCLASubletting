import {useState} from 'react';

function UserCreation(props) {
  const [text, setText] = useState("");
  const handleInput = (e) => {
    setText(e.target.value);
  }
  const createUser = () => {
    props.createUser(text);
    setText("");
  }
  return (
    <div>
      <p>Introduce yourself!</p>
      <div class="ui action input">
        <input type="text" onChange={handleInput} value={text} placeholder="Your name here" style={{height:10, width: 300}}/>
        <button onClick={createUser} class="ui blue button">create</button>
      </div>
    </div>
  )
}

export default UserCreation;
