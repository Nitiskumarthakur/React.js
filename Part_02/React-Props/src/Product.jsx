import './Product.css';
function Product({title, price, feature,f}){
  //let list = feature.map((feature)=> <ul><li>{feature}</li></ul>);
  //let isDiscount = price>15000 ? "Discount 5%" :"";
  
  let isDiscount = price > 15000;
  let styles = {backgroundColor: isDiscount ? "yellow" : null};
    return (
        <div class="Product" style={styles}>
          <h3>{title}</h3>
          <h5>{price}</h5>
          {/* <p>{isDiscount}</p> */}
          {isDiscount && <p>Discount 5%</p>}
        </div>
    )

}
export default Product;