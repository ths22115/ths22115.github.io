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
                <li className={"nav-button nested-button " + (props.page == 'exp' ? 'active' : '')}>
                    <Link href={'/exp'}>EXPERIENCE</Link>
                    {props.page == 'exp' ? 
                    (<ul className={"sublist exp-list"}>
                        <li id={"exp-all"} className={"tab exp-tab " + (props.expFilter == "all" ? "tab-active" : "")} onClick={props.updateExpFilter}>( ALL )</li>
                        <li id={"exp-swe"} className={"tab exp-tab " + (props.expFilter == "swe" ? "tab-active" : "")} onClick={props.updateExpFilter}>( SWE )</li> 
                        <li id={"exp-design"} className={"tab exp-tab " + (props.expFilter == "design" ? "tab-active" : "")} onClick={props.updateExpFilter}>( DESIGN )</li>
                    </ul>)
                    : ''}
                </li>
                <li className={"nav-button nested-button " + (props.page == 'port' ? 'active' : '')}>
                    <Link href={'/port'}>PORTFOLIO</Link>
                    {props.page == 'port' ? 
                    (<ul className={"sublist port-list"}>
                        <li id={"port-webdev"} className={"tab port-tab " + (props.portSection == "webdev" ? "tab-active" : "")} onClick={props.updatePortSection}>( UI/UX )</li> 
                        <li id={"port-design"} className={"tab port-tab " + (props.portSection == "design" ? "tab-active" : "")} onClick={props.updatePortSection}>( GRAPHIC )</li>
                    </ul>)
                    : ''}
                </li>
                <li className={"nav-button " + (props.page == 'contact' ? 'active' : '')}>
                    <Link href={'/contact'}>CONTACT</Link>
                </li>
            </ul>
            <div className="title mius">
                <Link href={'/'}>MIUS THOMAS</Link>
                <div className="subtitle">SWE &#x2022; DESIGNER</div>
            </div>
        </div>
    )
};
export default Navbar;