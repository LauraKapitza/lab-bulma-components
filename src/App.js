import 'bulma/css/bulma.css';
import React from 'react';
import Navbar from './navbar/Navbar.js';
import Formfield from './formfield/FormField.js';


const App = () => {
  return (
    <div>
      <Navbar />
      <div className='form'>
        <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
        <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    </div>
  )
};

export default App;