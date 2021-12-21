import React from 'react';
import { useHistory } from 'react-router';
import WishlistIcon from '../../images/wishlist.png';
import CartIcon from '../../images/cart.png';
import BackIcon from '../../images/back.png';

import './header.css';


const Header = ({ pageType = '' }) =>{
    const history = useHistory();

    return (
        <div className='header-wrapper'>
            {
                (pageType === 'CART' || pageType === 'WISHLIST') && <div className='back-icon' onClick={()=>history.goBack()}><img src={BackIcon} alt='back-icon'/> </div>
            }
            <h4 className='header-text' onClick={()=>history.push('/')}>FREE SHOPPING</h4>
            <div className='icon-wrapper'>
                {
                    (pageType != 'WISHLIST' && pageType !== 'CART') && <div className='icon-container' onClick={()=>history.push('/wishlist')}><img src={WishlistIcon} alt='wishlist-icon'/><div className='icon-info'>Wishlist</div></div>
                }
                {(pageType!= 'CART')&&<div className='icon-container' onClick={()=>history.push('/cart')}>
                    <img src={CartIcon} alt='cart-icon'/>
                    <div className='icon-info'>Cart</div>
                </div>}
            </div>
        </div>
    )
}

export default Header;