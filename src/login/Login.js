import 'bulma/css/bulma.css';
import CoolButton from '../coolbutton/Coolbutton.js';
import Formfield from '../formfield/FormField.js';
import React from 'react';



const Signup = () => {
    return (
        <div className='form'>
            <h2>Log in!</h2>
            <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
            <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <CoolButton isMedium isRounded isWarning>Login</CoolButton>
        </div>
    )
  };
  
  export default Signup;