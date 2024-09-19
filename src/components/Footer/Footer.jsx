import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Established in 1956, the founders' love for their trade began a decade ago. They are dedicated to recreating the unique experience they found lacking in the market.
RAGHUVIR TRADERS strives to be more than a business, aspiring to create a community hub with a focus on family values.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                        Near Nagnath Mandir, Amreli - 365601 ( Gujarat )
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +91 94281 90112</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: 1956raghuvir@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Dry-Fruits</span>
                    <span className="text">Betel-Nuts</span>
                    <span className="text">Mouth-Freshener</span>
                    
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        Raghuvir CREATED BY kirtan
                    </span>
                    <img src={Payment} alt="payment" />
                </div>
            </div>
        </div>
    );
};

export default Footer;