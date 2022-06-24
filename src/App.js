import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Product from "./components/product";
import QuantityPicker from "./components/quantityPicker";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Welcome to your Baller Paradise!!!</h1>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default App;
