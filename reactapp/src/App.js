import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const handleClick = () => {
    setDisplayText(inputText);
  }
  if(inputText.trim()!==''){
    setDisplayText('Hello,${inputText}')
  }

  return (
   <div className='Greet'>
    <h1><b>Hey!!! Greetings</b></h1>
    <form onSubmit={handleClick} data-testing='form'>
      <label data-testid='name'>Enter Your </label>
    </form>
   </div>
  );
}

export default App;
