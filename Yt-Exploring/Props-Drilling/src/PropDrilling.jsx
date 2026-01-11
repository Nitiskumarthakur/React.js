//PropDrilling:- Props Drilling is a pattern in react. Whare you pass Data from
// a Parent component to Deeply Nested child componet throught multiple layers 
// of component, Even if Some of the intermediate Component do`not need the Data.


export default function PropDrilling() {
    return (
        <div>
            <h1 style={{color:"green"}}>Learn PrpsDrilling.</h1>
            <ChildComponent data="React Prop Drilling" />
        </div>
    )
}
const ChildComponent = (props) => {
    return(
        <div>
            <h3>I am childComponet.</h3>
            <GrandChildComponent data={props.data}/>
        </div>
    )
}
const GrandChildComponent = (props)=>{
    return(
        <div>
            <h3>I am GandChildComponent,</h3>
            <p> I have data {props.data}</p>
        </div>
    )
}