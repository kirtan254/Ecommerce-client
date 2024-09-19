import React from 'react';
import Slider from 'react-slick';
import './hero.scss'; // Make sure the path to the SCSS file is correct
import img1 from "../../../assets/products/img15-f.jpg"; // Correct file extension
import img2 from "../../../assets/products/img5.jpg"; // Correct file extension
import img3 from "../../../assets/products/img10.jpg"; // Correct file extension

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [img1, img2, img3];

    return (
        <div className="hero-slider">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slider-item" style={{ backgroundImage: `url(${image})` }}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Hero;
