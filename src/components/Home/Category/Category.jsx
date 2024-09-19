import "./Category.scss";
import { useNavigate } from 'react-router-dom';

const Category = ({ categories }) => {
    const navigate = useNavigate(); 

    if (!categories || !categories.data) {
        return <div>Loading...</div>;
    }

    const baseUrl = process.env.REACT_APP_DEV_URL;

    return (
        <div className="shop-by-cat">
            <div className="cats">
                {categories.data.map((item) => (
                    <div key={item.id} className="cat" onClick={() => navigate(`/category/${item.id}`)}>
                        <img 
                         src={`${baseUrl}${item.attributes.img.data.attributes.url}`} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
