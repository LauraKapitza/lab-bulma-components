import React from 'react';
import 'bulma/css/bulma.css';

const Navbar = () => {
    return (
        <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </a>
            <div class="navbar-burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="https://bulma.io/">Home</a>
            </div>

            <div class="navbar-end">
            <div class="navbar-item">
                <a class="button is-info">Info</a>
            </div>

            <div class="navbar-item">
                <a class="button is-primary">Signup</a>
            </div>
            </div>
        </div>
        </nav>



        // <nav class="navbar is-transparent">
        //     <div class="navbar-brand">
        //         <a class="navbar-item" href="https://bulma.io">
        //             <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        //         </a>
        //         <div class="navbar-burger" data-target="navbarExampleTransparentExample">
        //         <span></span>
        //         <span></span>
        //         <span></span>
        //         </div>
        //     </div>

        //     <div id="navbarExampleTransparentExample" class="navbar-menu">
        //         <div class="navbar-start">
        //             <a class="navbar-item" href="https://bulma.io/">
        //                 Home
        //             </a>
        //         </div>

        //         <div class="navbar-end">
        //             <a class="navbar-item" href="https://bulma.io/">
        //                 Login
        //             </a>
        //             <a class="navbar-item" href="https://bulma.io/">
        //                 Signup
        //             </a>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Navbar;
