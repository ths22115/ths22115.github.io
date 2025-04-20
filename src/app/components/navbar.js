 "use client"
import React from "react";
import Link from 'next/link';
import "./navbar.css";

const Navbar = (props) => {
    if (props.isMobile 
        // && props.page != "landing"
    ) {
        const pageDisplayName = {
            "port": "PORTFOLIO",
            "exp": "EXPERIENCE",
            "landing": "HOME",
            "contact": "CONTACT",
            "about": "ABOUT",
        }
        console.log(Object.keys(pageDisplayName))

        const currPage = pageDisplayName[props.page]
        const nestedNav = props.page == "exp" || props.page == "port"
        
        if (nestedNav && props.focus > -1) {

        }

        return (
            <div className={"nav mobile nonlanding"}>
                {/* MINI. NAV FOR NON-LANDING PAGES W/ MIUS + ALL PAGE NAMES */}
                <div className="nav-mobile-text">
                    <div className="title mius mobile">
                        <Link href={'/'}>MIUS THOMAS</Link>
                    </div>
                    {/* { props.page == "landing" ? ( */}
                        <div className="nav-mobile-grid">
                            <div className="nav-mobile-links">
                                <div className="nav-mobile-rows">
                                    { Object.keys(pageDisplayName).map((page, index) =>
                                    index < 2 &&
                                    <div key={index} className={"nav-button mobile mius-var" + (currPage == pageDisplayName[page] ? " active" : "")}>
                                        <Link href={`/${page == "landing" ? "" : page}`}>{pageDisplayName[page]}</Link>
                                    </div>
                                    )}
                                </div>
                                <div className="nav-mobile-rows">
                                    { Object.keys(pageDisplayName).map((page, index) =>
                                    index >= 2 &&
                                    <div key={index} className={"nav-button mobile mius-var" + (currPage == pageDisplayName[page] ? " active" : "")}>
                                        <Link href={`/${page == "landing" ? "" : page}`}>{pageDisplayName[page]}</Link>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    {/* ) : ( */}
                        {/* <div className="nav-mobile-grid">
                            <div className="nav-mobile-nonlanding-row">
                                <div className={"mobile nav-button"}> {currPage} </div>
                                <div className={"mobile nav-button"}>  <Link href={'/'}>HOME</Link> </div>
                            </div>
                            { nestedNav ? (
                                <div className="nav-mobile-nested">
                                    { props.page == 'exp' ? (
                                        <ul className={"sublist exp-list mobile"}>
                                            <li id={"exp-all"} className={"tab exp-tab mobile " + (props.expFilter == "all" ? "tab-active" : "")} onClick={props.updateExpFilter}>( ALL )</li>
                                            <li id={"exp-swe"} className={"tab exp-tab mobile " + (props.expFilter == "swe" ? "tab-active" : "")} onClick={props.updateExpFilter}>( SWE )</li> 
                                            <li id={"exp-design"} className={"tab exp-tab mobile " + (props.expFilter == "design" ? "tab-active" : "")} onClick={props.updateExpFilter}>( DESIGN )</li>     
                                        </ul>
                                    ) : (
                                        <ul className={"sublist exp-list mobile"}>
                                            <li id={"port-webdev"} className={"tab port-tab mobile " + (props.portSection == "webdev" ? "tab-active" : "")} onClick={props.updatePortSection}>( UI/UX )</li> 
                                            <li id={"port-design"} className={"tab port-tab mobile " + (props.portSection == "design" ? "tab-active" : "")} onClick={props.updatePortSection}>( GRAPHIC )</li>
                                        </ul>
                                    )}
                                </div>
                            ) : "" }
                        </div> */}
                    {/* )} */}
                </div>

                {/* MINI. NAV FOR ALL PAGES W/ MIUS + ALL PAGE NAMES */}
                {/* <div className="nav-mobile-text">
                    <div className="title mius mobile">
                        <Link href={'/'}>MIUS THOMAS</Link>
                    </div>
                    <div className="nav-grid">
                        { nestedNav ? (
                            <div className="nav-mobile-nested">
                                <div className={"mobile nav-button mius-var active " + (nestedNav ? "nested-button" : "")}> {currPage} </div>
                                { props.page == 'exp' ? (
                                    <ul className={"sublist exp-list mobile"}>
                                        <li id={"exp-all"} className={"tab exp-tab mobile " + (props.expFilter == "all" ? "tab-active" : "")} onClick={props.updateExpFilter}>( ALL )</li>
                                        <li id={"exp-swe"} className={"tab exp-tab mobile " + (props.expFilter == "swe" ? "tab-active" : "")} onClick={props.updateExpFilter}>( SWE )</li> 
                                        <li id={"exp-design"} className={"tab exp-tab mobile " + (props.expFilter == "design" ? "tab-active" : "")} onClick={props.updateExpFilter}>( DESIGN )</li>     
                                    </ul>
                                ) : (
                                    <ul className={"sublist exp-list mobile"}>
                                        <li id={"port-webdev"} className={"tab port-tab mobile " + (props.portSection == "webdev" ? "tab-active" : "")} onClick={props.updatePortSection}>( UI/UX )</li> 
                                        <li id={"port-design"} className={"tab port-tab mobile " + (props.portSection == "design" ? "tab-active" : "")} onClick={props.updatePortSection}>( GRAPHIC )</li>
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <div className={"mobile nav-button mius-var active " + (nestedNav ? "nested-button" : "")}> {currPage} </div>
                        )
                        }
                        <div className="nav-mobile-others">
                            { Object.keys(pageDisplayName).map((page, index) =>
                                pageDisplayName[page] != currPage && 
                                <div key={index} className="nav-button mobile mius-var">
                                    <Link href={`/${page == "landing" ? "" : page}`}>{pageDisplayName[page]}</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div> */}

                {/* MINI. NAV FOR NON-LANDING PAGES W/ MIUS + PAGE NAME + ARROW */}
                {/* <div className="nav-mobile-text">
                    <div className="title mius mobile">
                        <Link href={'/'}>MIUS THOMAS</Link>
                    </div>
                    { nestedNav ? (
                        <div className="nav-mobile-nested">
                            <div className={"mobile nav-button " + (nestedNav ? "nested-button" : "")}> {currPage} </div>
                            { props.page == 'exp' ? (
                                <ul className={"sublist exp-list mobile"}>
                                    <li id={"exp-all"} className={"tab exp-tab mobile " + (props.expFilter == "all" ? "tab-active" : "")} onClick={props.updateExpFilter}>( ALL )</li>
                                    <li id={"exp-swe"} className={"tab exp-tab mobile " + (props.expFilter == "swe" ? "tab-active" : "")} onClick={props.updateExpFilter}>( SWE )</li> 
                                    <li id={"exp-design"} className={"tab exp-tab mobile " + (props.expFilter == "design" ? "tab-active" : "")} onClick={props.updateExpFilter}>( DESIGN )</li>     
                                </ul>
                            ) : (
                                <ul className={"sublist exp-list mobile"}>
                                    <li id={"port-webdev"} className={"tab port-tab mobile " + (props.portSection == "webdev" ? "tab-active" : "")} onClick={props.updatePortSection}>( UI/UX )</li> 
                                    <li id={"port-design"} className={"tab port-tab mobile " + (props.portSection == "design" ? "tab-active" : "")} onClick={props.updatePortSection}>( GRAPHIC )</li>
                                </ul>
                            )}
                        </div>
                    ) : (
                        <div className={"mobile nav-button " + (nestedNav ? "nested-button" : "")}> {currPage} </div>
                    )
                    }
                </div>
                <div className="nav-button mobile home-nav-icon">
                    <Link href={'/'}>&larr;</Link>
                </div> */}

                {/* MINI. NAV FOR NON-LANDING PAGES W/ PAGE NAME + ARROW */}
                {/* { nestedNav ? (
                        props.page == 'exp' ? (
                            <ul className={"sublist exp-list mobile"}>
                                <li id={"exp-all"} className={"tab exp-tab mobile " + (props.expFilter == "all" ? "tab-active" : "")} onClick={props.updateExpFilter}>( ALL )</li>
                                <li id={"exp-swe"} className={"tab exp-tab mobile " + (props.expFilter == "swe" ? "tab-active" : "")} onClick={props.updateExpFilter}>( SWE )</li> 
                                <li id={"exp-design"} className={"tab exp-tab mobile " + (props.expFilter == "design" ? "tab-active" : "")} onClick={props.updateExpFilter}>( DESIGN )</li>     
                            </ul>
                            
                        ) : (
                            <ul className={"sublist exp-list mobile"}>
                                <li id={"port-webdev"} className={"tab port-tab mobile " + (props.portSection == "webdev" ? "tab-active" : "")} onClick={props.updatePortSection}>( UI/UX )</li> 
                                <li id={"port-design"} className={"tab port-tab mobile " + (props.portSection == "design" ? "tab-active" : "")} onClick={props.updatePortSection}>( GRAPHIC )</li>
                            </ul>
                        )
                ) : '' }
                <div className={"mobile nav-button " + (nestedNav ? "nested-button" : "")}> {currPage} </div> */}
                {/* <div className="nav-button mobile home-nav-icon">
                    <Link href={'/'}>&larr;</Link>
                </div> */}
            </div>         
        )
    }
    return (
        <div className={"nav" + (props.isMobile ? " mobile" : "")}>
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