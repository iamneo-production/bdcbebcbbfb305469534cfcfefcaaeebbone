import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault(); 

    if (inputText.trim() !== '') {
      setDisplayText(`Hello, ${inputText}`);
    }
  }

  return (
    <div className='App'>
      <h1><b>Hey!!! Greetings</b></h1>
      <form onSubmit={handleClick} data-testing='form'>
        <label data-testid='name'>Enter your name:</label>
        <input type="text" value={inputText} onChange={handleChange}></input>
        <input type="submit" data-testid="buttonElement" value="Say Hello" />
      </form>
      {displayText && <h2>{displayText}</h2>}
    </div>
  );
}

export default App;
