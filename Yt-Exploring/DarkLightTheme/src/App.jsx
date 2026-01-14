//import './App.css'
import {ThemeProvider} from './DarkLightThem';
import {DarkLight} from './DarkLight'

function App() {
  return(
    <div>
      <ThemeProvider>
        <DarkLight/>
      </ThemeProvider>
    </div>
  )
}

export default App
