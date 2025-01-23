import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './Home';
import Login from './Login';
import Register from './Register';
// import { Link } from 'react-router-dom';

function Routing() {

  return (<>
    <Link to='/Login'><button>Home</button></Link>
  
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
    </>
  );
}

export default Routing;