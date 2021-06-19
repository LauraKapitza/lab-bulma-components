import 'bulma/css/bulma.css';
import Login from './login/Login.js';
import Navbar from './navbar/Navbar.js';
import React from 'react';
import Signup from './signup/Signup.js';

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <Signup />
      <hr />
      <Login />
    </div>
  )
};

export default App;