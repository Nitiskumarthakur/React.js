import Price from './Price..jsx'
import './Card.css';

function Card({title,idx}){
    let oldPrice = ["12,999", "15,999", "2,333", "1,549"];
    let newPrice = ["11,999", "13,999", "2,123", "1,049"];
    let description = [
        ["Maginc Apple Pencil","Better for Design"], 
        ["Wirless Apple Mouse","Light-weight"], 
        ["Backkit KeyBoard","havy-weight"], 
        ["Under 2k mouse","Movement for Editing"]
    ];
    
    return(
        <div className='Card'>
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]}  newPrice={newPrice[idx]}/>
        </div>
    );
}

export default Card;