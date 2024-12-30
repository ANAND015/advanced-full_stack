import { Link } from "react-router-dom"
import "../../assets/css/Home.css"

var NavBar =()=>{
    return(
    <header>
        <nav>
            <div className="container">
            <h1>FullSt@ck</h1>
            <ul>
               <Link to="Home"><li>Home</li></Link> 
               <Link to="Gallery"> <li>Gallery</li></Link>
               <Link to="About"><li>About</li></Link>
               <Link to="COntact"> <li>Contact</li></Link>
            </ul>
            </div>
        </nav>
        <h1>This is Navbar Page</h1>
    </header>
    )
}
export default NavBar