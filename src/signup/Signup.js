import 'bulma/css/bulma.css';
import CoolButton from '../coolbutton/Coolbutton.js';
import Formfield from '../formfield/FormField.js';
import React from 'react';


const Signup = () => {
    return (
        <div>
            <h2>Sign up!</h2>
            <Formfield label="Name" type="text" placeholder="e.g John Doe" />
            <Formfield label="Email" type="email" placeholder="e.g. johndoe@gmail.com" />
            <Formfield label="Password" type="password" placeholder="********" />
            <CoolButton isMedium isRounded isSuccess>Submit</CoolButton>
        </div>
    )
}

export default Signup;