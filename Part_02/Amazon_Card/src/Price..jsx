export default function Price({oldPrice, newPrice}) {
    let oldStyles = {
       textDecorationLine:"line-through", 
    };
    let newstyles = {
        fontWeight:"bold"
    };
    let styles = {
        backgroundColor:"#e0c367",
        height:"30px",
        borderBottomLeftRadius:"15px",
        borderBottomRightRadius:"15px"
    }
    return (
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp; 
            <span style={newstyles}>{newPrice}</span>
        </div>
    );
}