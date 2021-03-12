import React from 'react'
import { addQty, selectCarts, addAlertCart, setAlertEmpty, addCarts, dislike, addlike } from "../../../features/counter/counterSlice"
import { useSelector, useDispatch } from 'react-redux';

export default function Product_Items({ data }: any) {
    // const [cartVal, setCartVal] = React.useState<any>({});
    const [qty, setQty] = React.useState(0);

    const dispatch = useDispatch();
    const carts = useSelector(selectCarts);

    React.useEffect(() => {
        dispatch(setAlertEmpty());
    }, [])

    let storeCart: any;
    let condition = false;

    function add(id: string) {
        data.links.map((items: any) => {

            if (items.id === id) {
                storeCart = items
            }
        })

        if (!carts.length) {
            dispatch(addCarts(storeCart));
            dispatch(addAlertCart(storeCart));
        } else {
            carts.map((item: any) => {
                if (item.id === storeCart.id) {
                    // setQty(qty + 1)
                    // alert(qty);
                    condition = true;

                }
            })

            if (!condition) {
                dispatch(addCarts(storeCart));
                dispatch(addAlertCart(storeCart));
            } else {
                dispatch(addQty(storeCart));
                dispatch(addAlertCart(storeCart));
            }
            condition = false;

        }
    }
    console.log(carts)


    return (
        <div className="my-5 py-3">
            <div className="container-fluid px-5 my-4">
                <h2>{data.label}</h2><hr />
            </div>
            <div className="product-div">

                {
                    data.links.map((item: any, ind: number) => {

                        return <div className="card" key={ind} style={{ width: "20rem" }}>

                            <div className="img-container">
                                <div className="card-hover">
                                    <div className="rating">
                                        <span>{item.likes}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" onClick={() => dispatch(addlike(item.id))} fill="currentColor " className="like bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" onClick={() => dispatch(dislike(item.id))} fill="currentColor " className="dislike bi bi-hand-thumbs-down" viewBox="0 0 16 16">
                                            <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z" />
                                        </svg>
                                        <span>{item.dislikes}</span>

                                    </div>
                                </div>
                                <img src={item.link} className="card-img-top" alt={item.link} />
                            </div>

                            <div className="card-body">
                                <h5 className="card-text m-0">{item.title}</h5>
                                <div className="d-flex align-items-end">
                                    <label className="card-text">Price: </label>
                                    <label className="card-text"><s>$10</s> ${item.price}</label>

                                    <div className="addCart">
                                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => add(item.id)} width="33" height="33" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                        </svg>
                                    </div>

                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
