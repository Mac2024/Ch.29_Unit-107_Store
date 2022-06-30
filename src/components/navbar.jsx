import "./navbar.css";

function Navbar(){
    return (
        <div className="navbar justify-content-end">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"> Home </a>
                </li>
                <li className="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Contact</a>
                </li>
         </ul>
      </div>
        
     
    );
}

export default Navbar;