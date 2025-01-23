import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" placeholder='Enter Email' required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" placeholder='Enter Password' required />
        </div>
        <div>
          <button type="submit">Login</button>
          <Link to="/Register"><button type="submit">Register</button></Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
