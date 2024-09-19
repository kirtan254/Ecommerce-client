// Header.js

import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import { Context } from '../../utils/context';
import Cart from '../Cart/Cart';
import Search from './Search/Search';
import './Header.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { isAuthenticated, logout, cartCount } = useContext(Context);
  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout(); // Call logout function from context
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <>
      <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
        <div className="header-content">
          <div className="left" onClick={() => navigate('/')}>
            RAGHUVIR
          </div>
          <ul className="center">
            <li onClick={() => navigate('/')}>Home</li>
            <li>About</li>
            <li>Category</li>
            {isAuthenticated ? (
              <li onClick={handleLogout}>Logout</li>
            ) : (
              <li onClick={() => navigate('/signin')}>Logout</li>
            )}
          </ul>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setshowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
