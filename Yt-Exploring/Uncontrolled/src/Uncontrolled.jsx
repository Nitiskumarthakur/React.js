// React are the those where tha form data handle by the DOM itself.
// Using the - the value of the input field is controlled by the document.querySelector().

export default function Uncontrolled(){

   let showBtn = ()=>{
       let ace = document.querySelector("#name").value;
       console.log(ace);
       ace="";
   }
 
   return (
    <div>
        <h2>Uncontrolled Component</h2>
        <label htmlFor="name">name</label>
        <input type="text"   id="name" />
        <button onClick={showBtn}>show</button>
    </div>
   )
}