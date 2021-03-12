import React from 'react';
import "./Home.css"
import "./animatedButtons.css"
import { Link } from "react-router-dom"

import first from "../../images/1st.jpg"
import second from "../../images/2nd.jpg"
import third from "../../images/3rd.jpg"

export default function Home() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={first} alt={first} />
          </div>
          <div className="carousel-item">
            <img src={second} alt={second} />
          </div>
          <div className="carousel-item">
            <img src={third} alt={third} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* stage 2 */}

      <div className="stage2">
        <div className="text-center">
          <h1>JUST DO IT</h1>
          <p>We have been your companion in happiness, both big and small, for over 50 years.
          <br />
          Our roots are firmly grounded in Pakistan and with its people.</p>
          {/* <p>Our Products</p> */}
        </div>
      </div>

      <div className="stage3 border py-4">
        <div>
          <h2 className="text-center">Our Products</h2>

          <div className="home-products my-5">

            <div className="card" style={{ width: "18rem" }}>
              <div className="img-container">
                <img id="img1" src="https://accessories.tvsmotor.com/images/premium-acc/T-shirts-red-and-blue-1.jpg" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <button className="btn btn-primary">show more</button>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="img-container">
                <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <button className="btn btn-primary">show more</button>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="img-container">
                <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8e%2F6a%2F8e6aeab3257293cbdb1d7dc41ab7d81a1cacdefe.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_hatscaps%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <button className="btn btn-primary">show more</button>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="img-container">
                <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <button className="btn btn-primary">show more</button>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              </div>
            </div>

          </div>

          <Link className="Link" to="/products">
            <button id="showMore" className="btn btn-outline-danger d-block mx-auto py-2 px-3">


              Explore Shopping
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart4 mx-1" viewBox="0 0 14 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>

            </button>
          </Link>
        </div>

        <i className="bi bi-chat-fill"></i>


      </div>
    </div>

  )
};