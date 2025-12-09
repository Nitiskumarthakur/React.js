function doSomething(){
    console.log("Buttom clicks");
}
function prints(){
    console.log("Paragraph was Click");
}
function mouseOver(){
    console.log("Mouse over on page");
}
function Doubleclick(){
    console.log("Double click on the page");
}
export default function Buttom(){
    return(
        <div>
            <button onClick={doSomething}>click me</button>
            {/* <p onClick={prints}>Don`t click paraGraph</p> */}
            <p onMouseOver={mouseOver}>Hii, I am nitish thakur blong to Bihar. 
                District Name East Chaparana Bihar 845417
            </p>
            <button onDoubleClick={Doubleclick}>Double click!</button>
        </div>
    )
}