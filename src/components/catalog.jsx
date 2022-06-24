import "./catalog.css";
import Product from "./product";

const Catalog = () =>{
    return(
        <div className="catalog">
            <h2>This is our Amazing Catalog!!</h2>
            <h3>We have #products products!</h3>
            <Product>Basketball</Product>
            <Product>Baseball</Product>
            <Product>Softball</Product>
            <Product>Tennis ball</Product>
            <Product>Golf ball</Product>


            {/* display the products here */}
        </div>
    );
}

export default Catalog;