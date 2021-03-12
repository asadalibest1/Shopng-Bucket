import React from 'react';
import "./Navbar.css"
import bucket from "../../images/bucket.png";
import { Link } from "react-router-dom"

export default function Appbar() {
    function changeToggle() {
        const element: any = document.querySelector(".home-sidebar");
        element.style.left = "0%";
    }

    return (
        <div className="header-div">
            <nav className="inner-header-div">
                <div className="toggle" onClick={changeToggle}>
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
                    <span className="four"></span>
                </div>
                <div className="container-fluid text-white">
                    <span className="navbar-brand mb-0 mx-2 h1">Shopping Bucket</span>
                    <img src={bucket} alt="bucket" />
                </div>
                <div className="menubar">
                <Link to="/">
                    <span>HOME</span>
                    </Link>
                <Link to="/products">
                    <span>PRODUCTS</span>
                </Link>
                <Link to="/carts">
                    <span>CARTS</span>
                </Link>
                </div>
            </nav>

        </div>
    )
}