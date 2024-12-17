 "use client"
import React from "react";
import "./navbar.css";

const Navbar = (props) => {
    if (props.page == 'about') {
        
    } 
    return (
        <div className="nav">
            <a className="title mius">MIUS THOMAS</a>
            <ul className="nav-list">
                <li className={"nav-button " + (props.page == 'about' ? 'active' : '')}>ABOUT</li>
                <li className={"nav-button " + (props.page == 'portfolio' ? 'active' : '')}>PORTFOLIO</li>
                <li className={"nav-button " + (props.page == 'experience' ? 'active' : '')}>EXPERIENCE</li>
                <li className={"nav-button " + (props.page == 'contact' ? 'active' : '')}>CONTACT</li>
            </ul>
        </div>
    )
};
export default Navbar;