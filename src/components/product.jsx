import "./product.css";
import QuantityPicker from "./quantityPicker";
const Product = () => {
    return(
        <div className="product" >
            <img src="https://media.istockphoto.com/vectors/basketball-vector-id820266466?k=6&m=820266466&s=612x612&w=0&h=n_N9yPOxpMJacMISNnS-XXYF8iyOdy_UXYrFUds0vHM=" alt="sports" />
            <h2>Title</h2>
            <label>Price: $300.00</label>
            <label>Total: $200.00</label>
            <QuantityPicker></QuantityPicker>
            <button className="btn btn-primary">Add</button>
        </div>
    )
}

export default Product;