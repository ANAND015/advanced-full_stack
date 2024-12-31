import { Link } from "react-router-dom"
import "../../assets/css/Navbar.css"

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
               <Link to="UseEffect"> <li>Use-Effect</li></Link>
               <Link to="UseRef"> <li>Use-Ref</li></Link>
               <Link to="UseContext"> <li>Use-Context</li></Link>
               <Link to="UseMemo"> <li>Use-Memo</li></Link>
               <Link to="COntact"> <li>Contact</li></Link>
            </ul>
            </div>
        </nav>
        <h1>This is Navbar Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate eaque error praesentium ipsum qui illo pariatur animi cum velit provident quibusdam, earum excepturi alias voluptas? Omnis dolore earum enim exercitationem eligendi consequatur a officiis expedita ullam eaque, doloremque quam optio quis cum qui voluptatibus illum magni! Eveniet asperiores est facere ea officiis voluptatibus obcaecati explicabo sit praesentium, expedita mollitia quos, laudantium quam repudiandae. Veniam sed, illo itaque temporibus iste praesentium velit consequatur, earum voluptatem, harum non et dolorum mollitia eaque laborum quaerat! Amet doloremque reprehenderit optio modi officia numquam ad dignissimos, tenetur earum, totam porro distinctio beatae natus fugit, excepturi adipisci commodi consequatur minima repudiandae tempora voluptatum sed perferendis placeat! Possimus dolorum, sunt corrupti voluptate facere at consequuntur eligendi numquam inventore id! Corporis iste nisi reiciendis veritatis cumque facilis, qui praesentium sapiente nemo alias dolorum ea maxime, rerum rem itaque hic odio impedit. Eveniet voluptatibus expedita eum deserunt ducimus eius natus. Ducimus iste voluptatum culpa corporis repudiandae incidunt dolorem sunt nisi! Nisi tempora corporis iste! Exercitationem quos ullam, vitae dolore, nihil molestias, non nam voluptas ipsum iure magni earum! Nostrum, in facilis? Quod molestiae maxime animi ex, tempora corporis magnam? Natus at dicta, repudiandae adipisci voluptatibus laudantium aperiam suscipit.</p>
    </header>
    )
}
export default NavBar