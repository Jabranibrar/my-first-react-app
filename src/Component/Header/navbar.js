import React from 'react';
import Logo from '../../assets/images/logo-1.svg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import './navbar.css';
const Navbar = () => {
    return (
        <>
        <div className="back-img">
        <div className="navbar">
                <img src ={Logo} className="logo" alt="logo picture"/>

            <ul className="menu-list">
                <li className="list-item"><a href="/">Home</a></li>
                <li className="list-item"><a href="/contact">contact</a></li>
                <li className="list-item"><a href="#">Visibility</a></li>
                <li className="list-item"> <Button outline="primary" size="lg" >Ordered</Button></li>
                <li className="list-item"><a href="#">About</a></li>
            </ul>
            
        </div>
        </div>
       
        </>
    );
}

export default Navbar;