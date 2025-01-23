import React from 'react';
import { Link } from 'react-router-dom';
function Register() {
  return (
    <div>
      <h2>Registration Form</h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input id="firstName" type="text" placeholder='Enter your name' required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" placeholder='Enter your Email' required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" placeholder='Enter Password' required />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input id="age" type="date" />
        </div>
        <div>
          <button type="submit">Register</button>
          <Link to="/Login"><button type="submit">Login</button></Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
