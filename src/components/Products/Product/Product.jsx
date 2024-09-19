import "./Product.scss";
// import prod from "../../../assets/products/db.jpg";
import {useNavigate} from 'react-router-dom';

const Product = ({ id, data }) => {

    const navigate=useNavigate();
    const baseUrl = process.env.REACT_APP_DEV_URL;
    const imageUrl = data?.img?.data?.[0]?.attributes?.url;
    const fullImageUrl = `${baseUrl}${imageUrl}`;

    console.log("Product Data:", data);
    console.log("Image URL:", fullImageUrl);

    return (
        <div className="product-card" onClick={()=> navigate("/product/"+id)}>
            <div className="thumbnail">
                <img src={fullImageUrl} alt={data.title || "Product Image"} />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">&#8377;{data.price}</span>
            </div>
        </div>
    );
};

export default Product;
