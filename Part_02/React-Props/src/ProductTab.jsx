import Product from './Product.jsx';

function ProductTab(){
    let arr = ["hi-tech","durable"];
    let option ={a:"hi-tech", b:"durable"};
    return (
        <div>
           <Product title="Phone" price={13000} />  {/* title & price call Proprs */}
           <Product title="table" price={15000} />
           <Product title="laptop" price="20000"/>    
       </div>
    )
}
export default ProductTab;






