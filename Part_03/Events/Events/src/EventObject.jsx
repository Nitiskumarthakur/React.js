function Evett(event){
    console.log(event);
    console.log("click ok");
}

export default function EventObject(){
    return(
        <div>
            <button onClick={Evett}>click m!</button>
        </div>
    )
}