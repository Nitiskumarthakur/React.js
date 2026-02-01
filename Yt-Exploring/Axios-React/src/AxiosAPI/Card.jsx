 
export default function Card({image, name}){
    return(
        <div style={{border:"2px black solid",width:"25%",marginLeft:"150px",}}>
            <p style={{color:"red"}}>{name}</p>
            <img src={image} alt="#" />
        </div>
    )
}