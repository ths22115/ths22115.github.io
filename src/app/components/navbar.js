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
                        <li id={"exp-all"} className={"exp-tab " + (props.expFilter == "all" ? "exp-active " : "") + (props.page == 'exp' ? 'exp-visible' : '')} onClick={props.updateExpFilter}>( ALL )</li>
                        <li id={"exp-swe"} className={"exp-tab " + (props.expFilter == "swe" ? "exp-active " : "") + (props.page == 'exp' ? 'exp-visible' : '')} onClick={props.updateExpFilter}>( SWE )</li> 
                        <li id={"exp-design"} className={"exp-tab " + (props.expFilter == "design" ? "exp-active " : "") + (props.page == 'exp' ? 'exp-visible' : '')} onClick={props.updateExpFilter}>( DESIGN )</li>
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