import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ShoppingCart from '../components/Shoppingcart';


function Header() {
    return (
      <header className="header">
            <h1>KuusiKuusiKuusi</h1>
            <ShoppingCart />
        </header>
    );
  }
  
  export default Header;