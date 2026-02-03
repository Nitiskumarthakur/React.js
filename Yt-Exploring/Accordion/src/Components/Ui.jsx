
export default function Ui({curData,onToggle,isActive}) {

    return (
        <li>
            <div className='accordion-grid'>
                <p>{curData.question}</p>
                <button  
                    onClick={onToggle} 
                    className={isActive ?"active-btn":""}
                >{isActive?"Close":"Show"}</button>
            </div>
            <p>{isActive && curData.answer}</p>
        </li>
    )
}