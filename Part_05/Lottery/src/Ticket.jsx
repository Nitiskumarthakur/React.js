import './Ticket.css'
import TicketNum from "./TicketNum"
export default function Ticket({ticket}){
    return (
        
        //--------First Method---------
        // <div>
        //     <TicketNum num={ticket}/> 
        // </div>

        //---------Second Method-------
        
        <div className="Ticket">
            <p>Ticket</p>
            {
                ticket.map((num, idx)=>(
                    <TicketNum num={num} key={idx}/>
                ))
            }
        </div>
    )
}