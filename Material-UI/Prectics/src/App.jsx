import KeyAPI from './keyAPI'
import './App.css'
import { useState } from 'react';

function App() {
  let [key, setKey] = useState("");
  
  let keya = ((ui) =>{
      setKey(ui);
  })
  return (
    <div>
      <h3>Key Api </h3>
      <KeyAPI keyy={keya}/>
      {key} 
    </div>
  )
}

export default App
