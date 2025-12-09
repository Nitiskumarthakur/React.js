import Card from "./Card.jsx";
export default function CardTab(){
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    };
    return(
        <div style={styles}>
            <Card title="Apple pencil (3rd Gen)"  idx={0}/>
            <Card title="Apple Computer mouse"  idx={1}/>
            <Card title="Zebronics Zeb-Keyword"     idx={2}/>
            <Card title="Pentronise Computer mouse"  idx={3}/>
        </div>
    );
}