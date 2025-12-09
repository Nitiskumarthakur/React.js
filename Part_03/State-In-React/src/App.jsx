import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import LIKEBUTTON from './LIKEBUTTON'

function App() {
  return (
    <div>
      <h1>State-in React.Js</h1>
      <Counter/>
      <LIKEBUTTON/>
    </div>
  )
}

export default App
