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
      <span class="tab2"></span>
      Introduce yourself!
      <p></p><p></p>
      <div class="ui input">
      <p></p><p></p>
        <input type="text" onChange={handleInput} value={text} placeholder="Your name here" style={{height:10, width: 320}}input/>
      </div>
      <p></p>
      <div>
      <span class="tab1"></span>
        <button onClick={createUser} class="ui inverted blue large button">create</button>
      </div>
    </div>
  )
}

export default UserCreation;
