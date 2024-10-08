import "./CartItem.scss";
import React, { useContext } from "react";
import { Context } from "../../../utils/context";
// import prod from "../../../assets/products/db.jpg";
import { MdClose } from "react-icons/md";
const CartItem = () => {
    const {  cartItems, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context);
    return(
        <div className="cart-products">
        {cartItems.map(item=>(
            <div key={item.id}className="cart-product">
                <div className="img-container">
                    <img src={process.env.REACT_APP_DEV_URL +
                                item.attributes.img.data[0].attributes.url} alt="" />
                </div>
                <div className="prod-details ">
                    <sapn className="name">{item.attributes.title}</sapn>
                    <MdClose className="close-btn" onClick={()=>handleRemoveFromCart (item)}/>
                    <div className="quantity-buttons">
                    <span
                                onClick={() =>
                                    handleCartProductQuantity("dec", item)
                                }
                            >
                                -
                            </span>
                            <span>{item.attributes.quantity}</span>
                            <span
                                onClick={() =>
                                    handleCartProductQuantity("inc", item)
                                }
                            >
                                +
                            </span>
                        </div>
                        <div className="text">
                            <span>{item.attributes.quantity}</span>
                            <span>x</span>
                            <span className="highlight">
                                <span>&#8377;</span>
                                {item.attributes.price}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;