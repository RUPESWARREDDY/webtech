import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '8px' }}>
            <Link to="/" aria-label="Go to Home page">Home</Link>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <Link to="/Login" aria-label="Go to Login page">Login</Link>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <Link to="/Register" aria-label="Go to Register page">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
