import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";

const SingleProduct = () => {
    const { handleAddToCart } = useContext(Context);
    const[quantity,setQuantity]=useState(1);
    const {id}=useParams();
    const {data}=useFetch(`/api/products?populate=*&[filters][id]=${id}`);

    const incriment=()=>{
        setQuantity((prevState)=>prevState+1);
    }

    const decriment=()=>{
        setQuantity((prevState)=>{
            if(prevState===1) return 1;
            return prevState-1;
        });
    }



    if(!data) return;
    const product=data.data[0].attributes;
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                    <img src={ process.env.REACT_APP_DEV_URL +
                                product.img.data[0].attributes.url} alt="" />
                    </div>
                    <div className="right">
                    <span className="name">{product.title}</span>
                        <span className="price">&#8377;{product.price}</span>
                        <span className="desc">{product.desc}
                        </span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decriment}>-</span>
                                <span>{quantity}</span>
                                <span onClick={incriment}>+</span>
                            </div>
                            <button className="add-to-cart-button" 
                             onClick={() => {
                                    handleAddToCart(data?.data?.[0], quantity);
                                    setQuantity(1);
                                }}>
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                            category:
                            <span>{product.categories.data[0].attributes.name}</span>
                            </span>
                            <span className="text-bold">
                            share:
                            <span className="shocial-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                            </span>
                            </span>
                           
                        </div>

                    </div>
                </div>
                <RelatedProducts 
                productId={id} 
                categoryId={product.categories.data[0].id}

                />
            </div>
        </div>
    );
};

export default SingleProduct;
