import  fqa  from '../API/Fqa.json'
import { useEffect, useState } from 'react'
import Ui from './Ui';

export default function Accordion() {

    const [data, setData] = useState([]);
    const [activeId, setActiveID] = useState(false)
    
    useEffect(() => {
        setData(fqa);
    }, []);
    
    //handleBtn
    const handleBtn = (id)=>{
        setActiveID((preId)=>(preId === id ? false : id))
    }
    
    return (
        <div>
            <h1>React Accordion</h1>
            <ul className='section-accordion'>
                {
                    data.map((currEle)=>{
                        return(
                            <Ui 
                              key={currEle.id} 
                              curData={currEle}
                              isActive={activeId === currEle.id}
                              onToggle={()=>handleBtn(currEle.id)}
                            />
                        )
                        
                    })
                }
            </ul>
        </div>
    )
}