import React from 'react'
import Product_Items from './Product_Items/Product_Items'
import Alert from './alert/alert';
import "./Products.css"
import { Switch, Route} from "react-router-dom";

import { selectData } from "../../features/counter/counterSlice"
import { useSelector, useDispatch } from 'react-redux';


export default function Products() {

    const data = useSelector(selectData);
    const dispatch = useDispatch();

    //     data.map((items: any)=>{
    //         items.links.map((item: any)=>{
    //             // console.log(item.id);
    //             if(item.id === "003"){
    //                 console.log(item)
    //             }
    //     })
    // })
    var scrollTop = function () {
        // window.scrollTo({
        //     top: 100,
        //     left: 100,

        // },{duration:0});
        // window.scrollTo(0, 1000, {duration:0});
        // window.scrollTo(0, 100);
        // window.scrollTo({ top: 0, behavior: `smooth` })
    };

    function gototop() {
        const id: any = document.getElementById("elementtoScrollToID");
        window.scroll(0, id.offsetTop);
    };

    return (
        <div className="products">

            <h1 className="text-center mt-5">Trending Items</h1>

            <Alert />

            <Route path="/products/shirts">
                <Product_Items data={data[0]} />
            </Route>
            <Route path="/products/pants">
                <Product_Items data={data[1]} />
            </Route>
            <Route path="/products/shoes">
                <Product_Items data={data[2]} />
            </Route>
            <Route path="/products/hats">
                <Product_Items data={data[3]} />
            </Route>

            {/* <button onClick={scrollTop}>scrollTop</button> */}
{/* 
            <button onClick={gototop}>Button</button>
            <div style={{ margin: "800px 0" }}></div> */}


            {/* <div id="elementtoScrollToID" >
                Scroll to here...
                </div> */}
        </div>
    )
}