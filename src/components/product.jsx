import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
    
    return(
        <div className="product" >
            <img src= {"/images/" + props.data.image} alt="" />
            <h2>{props.data.title}</h2>
            <label>${props.data.price}</label>
            <label>Total: $200.00</label>
            <QuantityPicker></QuantityPicker>
            <button className="btn btn-primary">Add</button>
        </div>
    )
}

export default Product;