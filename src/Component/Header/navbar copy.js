import React from 'react'
import './navbar.css'
import Logo from './images/logo-1.svg'
const Contact = () => {
    return (
        <>
        <div className="back-img">
        <div className="navbar">
                <img src ={Logo} className="logo" alt="logo picture"/>

            <ul className="menu-list">
                <li className="list-item"><a href="#">Home</a></li>
                <li className="list-item"><a href="#">Contact</a></li>
                <li className="list-item"><a href="#">Visibility</a></li>
                <li className="list-item"><a href="#" className="active">Ordered</a></li>
                <li className="list-item"><a href="#">About</a></li>
            </ul>
            
        </div>
        </div>
        </>
    );
}

export default Contact;