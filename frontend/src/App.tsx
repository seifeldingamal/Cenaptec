import React, { useState, useEffect } from 'react';
import './App.css';
import getText from './helpers';

function App() {

  const [Text, setText] = useState<string>("")
  
  useEffect(() => {
    getText()
    .then(text => {
      setText(text.textList.text.text)
    })
  })
  
  return (
    <div className="App">
      <h1>{Text}</h1>
    </div>
  );
}

export default App;
