import "./Home.scss";
import hero from "./hero/hero"
import Banner from "./Banner/Banner"; 
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useContext, useEffect } from "react";
import {featchDataFromApi} from '../../utils/api';
import { Context } from "../../utils/context";

const Home = () => {
    const { products, setProducts, categories, setCategories } = useContext(Context);
useEffect(() => {
    getProducts();
    getCategories();
}, []);

const getProducts = () => {
    featchDataFromApi("/api/products?populate=*").then((res) => {
        setProducts(res);
    });
};
const getCategories = () => {
    featchDataFromApi("/api/categories?populate=*").then((res) => {
        setCategories(res);
    });
};
    return (
        <>
        <div >
            <Banner/>
            <div className="main-content">
                <div className="layout">
                <Category categories={categories}/>
                <Products products={products} headingText="Popular products"/>
                </div>
            </div>
            
        </div>
            
            {/* {hero()} */}
        </>
    )
};

export default Home;
