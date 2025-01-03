import { Link } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import axios from "axios";
Link;

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('',{name,email,password})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  }
  return (
    <div className="one">
      <div className="two">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="three">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter the Name"
              name="email"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="three">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Enter the Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="four">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="text"
              placeholder="Enter the password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="Submit" className="five">
            Regrister
          </button>
          <p>Already Have an Account</p>
          <Link to="/Login " className="six">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
