import { useState } from "react";
import "../../assets/css/Footer.css";
import axios from "axios";

const Footer = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = await axios.post("https://advanced-full-stack.onrender.com/footer", {
        Name,
        Email,
      });
      console.log("Registration successful:", req.data);
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="ct">
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter the Name"
            name="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter the Email"
            name="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer">
        <h4>DOOGLE</h4>
        <h3>Teardown</h3>
        <h3>News</h3>
        <h3>Partners</h3>
        <h3>About us</h3>
        <h3>Terms of use</h3>
      </div>
      <div className="main">
        <h4>Customer Service</h4>
        <h3>Facebook</h3>
        <h3>Instagram</h3>
        <h3>Twitter</h3>
      </div>
      <div className="root">
        <h4>More to Know</h4>
        <h3>Gallery</h3>
        <h3>My Account</h3>
        <h3>
          Contact us<h3></h3>Reedem Rewards
        </h3>
      </div>
    </div>
  );
};
export default Footer;
