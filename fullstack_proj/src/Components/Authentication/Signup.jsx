import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = await axios.post("http://localhost:3001/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      console.log("Registration successful:", req.data);
      navigate('/Login')

    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="one">
      <div className="two">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="three">
            <label htmlFor="firstName">
              <strong>First Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter the First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="three">
            <label htmlFor="lastName">
              <strong>Last Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter the Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="three">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter the Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="four">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter the Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="five">
            Register
          </button>
          <p>Already Have an Account?</p>
          <Link to="/login" className="six">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
