 "use client"
import React from "react";
import Link from 'next/link';
import "./navbar.css";

const Navbar = (props) => {
    return (
        <div className="nav">
            <ul className="nav-list">
                <li className={"nav-button " + (props.page == 'landing' ? 'active' : '')}>
                    <Link href={'/'}>HOME</Link>
                </li>
                <li className={"nav-button " + (props.page == 'about' ? 'active' : '')}>
                    <Link href={'/about'}>ABOUT</Link>
                </li>
                <li className={"nav-button " + (props.page == 'port' ? 'active' : '')}>
                    <Link href={'/port'}>PORTFOLIO</Link>
                </li>
                <li className={"nav-button nested-button " + (props.page == 'exp' ? 'active' : '')}>
                    <Link href={'/exp'}>EXPERIENCE</Link>
                    {props.page == 'exp' ? 
                    (<ul className="exp-list">
                        <li className={"exp-tab exp-active " + (props.page == 'exp' ? 'exp-visible' : '')}>SWE</li> / 
                        <li className={"exp-tab " + (props.page == 'exp' ? 'exp-visible' : '')}>DESIGN</li>
                    </ul>)
                    : ''}
                    
                </li>
                <li className={"nav-button " + (props.page == 'contact' ? 'active' : '')}>
                    <Link href={'/contact'}>CONTACT</Link>
                </li>
            </ul>
            <div className="title mius">
                <Link href={'/'}>MIUS THOMAS</Link>
            </div>
        </div>
    )
};
export default Navbar;