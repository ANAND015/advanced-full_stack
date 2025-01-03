import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form>
          <div className="login-field">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input type="email" placeholder="Enter your email" name="email" required />
          </div>
          <div className="login-field">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input type="password" placeholder="Enter your password" name="password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
          <p> Do not have an account?</p>
          <button className="signup-btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
