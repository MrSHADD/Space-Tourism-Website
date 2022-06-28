import React from "react";

export default function Header(){
    return(
        <header className="header">
            <nav className="navbar">
                <img src="./images/shared/logo.svg" className="img-logo"/>
                <span className="span-line"/>
                <div className="menu-container">
                    <ul className="nav-menu">
                        <li className="menu-item">00 HOME <span className="home-span"/></li>
                        <li className="menu-item">01 DESTINATION <span className="destination-span"/></li>
                        <li className="menu-item">02 CREW <span className="crew-span"/></li>
                        <li className="menu-item">03 TECHNOLOGY <span className="technology-span"/></li>
                    </ul>
                </div>
            </nav>  
        </header>
        
    )
}