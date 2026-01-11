import UseId from './UseID'
import './App.css'


function App() {
  return (
    <div>
      <h2>Learning UseId</h2>
      <div style={{display:"flex"}}>
        <div style={{marginRight:"15px"}}><h3>Explain:  </h3></div>
        <div><p>UseId is React Hook for Generating Unique ID that can be passed be Accessibility Attribute</p></div>
      </div>

      <UseId />
    </div>
  )
}

export default App
