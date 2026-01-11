//import PropDrilling from './PropDrilling.jsx'
import './App.css'
import Home from './ContextAPI/Home';
import About from './ContextAPI/About';
import {BioProvider} from './ContextAPI/ContextApi';

function App() {
  return (
    <>
     {/* <PropDrilling /> */}

      <BioProvider>
        <Home/>
        <About/>
      </BioProvider>
    </>

  )
}

export default App
