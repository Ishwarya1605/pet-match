import React from "react";
import "./Header.scss";
import dogLogo from "../../assets/pet-logo.svg";
import { Link, useLocation } from "react-router-dom";
function Header() {
    const { pathname } = useLocation();
    return (
        <>
            <div className="header-first">
                    <div className="header-left"> <p className="header-text"><img src={dogLogo} alt="Dog Logo" />Pet Match</p></div>
                    <nav className="nav-link">
                        <Link className={pathname === "/" ? "active" : ""} to="/">Home</Link>
                        <Link className={pathname === "/browsepets" ? "active" : ""} to="browsepets">BrowsePets</Link>
                        <Link className={pathname==="/petsprofile"?"avtive":""} to="petsprofile">PetProfile</Link>              
                        <Link className={pathname === "/about" ? "active" : ""} to="about">About</Link>     
                        <div className="header-right"><button className="logout-btn">Logout</button></div>
                    </nav>
            </div>
        </>
    );
}
export default Header;