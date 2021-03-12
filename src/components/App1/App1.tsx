import React from 'react';
import Home from "../Home/Home"
import SideBar from "../SideBar/SideBar"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Products from '../Products/Products';
import Carts from '../Carts/Carts';

import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App1() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
      <Navbar />
        <SideBar />
        <Switch>
        
          <Route path="/products">
          <Products />
          </Route>
        
          <Route path="/carts">
                <Carts />
          </Route>
      
         <Route path="/">
              <Home />
          </Route>
          
        </Switch>
        <Footer />


      </BrowserRouter>
    </div>
  )
};
