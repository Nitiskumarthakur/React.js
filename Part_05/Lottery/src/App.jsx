import Lottery from './Lottery'
import './App.css'
import Ticket  from './Ticket'
import { sum } from './Helper'

function App() {
  // let winCondition = (ticket)=>{
  //   return sum(ticket) === 15;
  // }

  //------------All Same Number-------
  // let winCondition = (ticket)=>{
  //   return ticket.every((num) => num === ticket[0]);
  // }
  return (
    <div>
      {/* <Lottery winCondition={winCondition}/> */}
      <Lottery />
      {/* <Ticket ticket={[0,2,4]}/> */}
        
    </div>
     
  )
}

export default App
