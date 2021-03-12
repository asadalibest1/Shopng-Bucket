import React from 'react'
import "./SideBar.css"
import bucket from "../../images/bucket.png";
import { Link } from "react-router-dom";
// import "./sidebarLoader.css";

import shirt from "../../images/icons/shirt.png"
import pant from "../../images/icons/pant.png"
import hat from "../../images/icons/hat.png"
import shoe from "../../images/icons/shoe.png"

export default function SideBar() {

    // const { data, error, loading } = useMissionInfoQuery();

    // console.log(data)
    // if (error)
    //         <div>found error, 404</div>

    function changeToggle() {
        const mediaQuery = window.matchMedia('(max-width: 800px)')
        const element: any = document.querySelector(".home-sidebar");

        if (!mediaQuery.matches) {
            element.style.left = "-20%";
        } else {
            element.style.left = "-90%";
        }
    }

    return (
        <div className="home-sidebar">
            <div className="closeToggle">
                <h4>Shopping Bucket</h4>
                <img src={bucket} alt="bucket" />
                <div onClick={changeToggle}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="sidebarList" onClick={changeToggle}>
                <div>

                    <Link to="/" className="Link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                            <path fill-rule="evenodd" d="M7.293 1.5a1 1  1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                        </svg>
                        HOME
                    </Link>
                    <Link to="/products" className="Link">

                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-archive-fill" viewBox="0 0 16 16">
                            <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                        </svg>
                        PRODUCTS
                    </Link>
                    <Link to="/carts" className="Link">

                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-bag-check-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                        </svg>
                        CARTS
                    </Link>
                </div>
                <div>
                    <Link to="/missions" className="Link">
                        <img src={shirt} alt="shirt" />
                        SHIRTS
                    </Link>
                    <div>
                        <Link to="/" className="Link">
                        <img src={pant} alt="shirt" />

                            PAINTS
                    </Link>
                    </div>
                    <div>
                        <Link to="/missions" className="Link">
                        <img src={shoe} alt="shirt" />
                            SHOES
                    </Link>
                    </div> <div>
                        <Link to="/" className="Link">
                        <img src={hat} alt="shirt" />
                            HATS
                    </Link>
                    </div>
                    <div>
                        <Link to="/missions" className="Link">
                            CARTS
                    </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}