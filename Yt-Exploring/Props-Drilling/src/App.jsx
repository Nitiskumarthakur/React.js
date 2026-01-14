//import PropDrilling from './PropDrilling.jsx'
import './App.css'
import Home from './ContextAPI/Home';
import About from './ContextAPI/About';
import {BioProvider} from './ContextAPI/ContextApi';
import Service from './ContextAPI/Service';

function App() {
  return (
    <>
     {/* <PropDrilling /> */}

      <BioProvider>
        <Home/>
        <About/>
        <Service/>
      </BioProvider>
    </>

  )
}

export default App
