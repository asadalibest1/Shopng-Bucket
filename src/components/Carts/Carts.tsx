import React from 'react'
import "./Carts.css"
import second from "../../images/2nd.jpg"
import { selectCarts, deleteCart } from "../../features/counter/counterSlice"
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"

export default function Carts() {

  const carts = useSelector(selectCarts);
  const dispatch = useDispatch();

  function _deleteCart(id: string) {
    carts.map((item: any) => {
      if (item.id === id) {
        dispatch(deleteCart(item.id))
      }
    })
  }
  console.log(carts)

  if (!carts.length) {
    return <div className="empty-card">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
        <label>Empty Cart</label>
      </div>
      <h3>You have not select any product yet</h3>
      <p>Select any product to check cart —
        <Link className="empty-link" to="/products"><b>Go and check it out!</b></Link></p>
    </div>
  }
  
  return (
    <div className="carts">
      <div className="order-summary py-5">
        <h1>Order Summary</h1>
        <p>Total Items : 3</p>
        <h2>Total Amount : $214.95</h2>
        <button className="btn btn-primary mt-5">Proceed to checkout</button>
      </div>

      <div>

        <div className="cart-items text-center">


          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col"></th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>

              {
                carts.map((item: any, ind: number) => {
                  return <tr>
                    <th>{ind+1}</th>
                    <td>
                      <img src={item.link} alt="image not found!" />
                    </td>
                    <td>{item.title}</td>
                    <td>
                      <button className="btn btn-primary">+</button>
                          {item.qty}
                        <button className="btn btn-primary">-</button>
                    </td>
                    <td>{item.price}$</td>
                    <td>Total</td>
                    <td>
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" onClick={() => _deleteCart(item.id)} className="bi bi-cart-x-fill" viewBox="0 0 16 16">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646L8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z" />
                      </svg>
                    </td>
                  </tr>
                })
              }

            </tbody>
          </table>

        </div>
        <h1 className="text-center my-5 font-weight-100">Total Price 7404$</h1>
      </div>
    </div>
  )
}
