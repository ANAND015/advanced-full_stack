import { useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = await axios.post("https://advanced-full-stack.onrender.com/login", {
        email,
        password,
      });
      console.log(req.data);
      alert("Logined Successfully");
      var isLoginSuccessful = req.data.isLoggedIn;
      console.log(req);
      localStorage.setItem("userName",req.data.firstName);
      if (isLoginSuccessful) {
        //navigate("/use-memo");
        var message = req.data.message;
        console.log(message);
      }
      //
    } catch (err) {
      console.log("Error Login", err);
    }
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-field">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <p> Do not have an account?</p>
          <button className="signup-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
