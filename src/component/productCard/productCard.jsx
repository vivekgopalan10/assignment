import React from 'react';
import Button from '../button/button';
import './productCard.css';

const BtnStyle = {'width':'100%','font-size':'12px'}
const ProductCard = ({productImage='',brandName='',productName='',price=0,addCart,addWishlist, pageType = ''}) =>{


    const renderBtn = (pageType) => {
        switch(pageType){
            case 'WISHLIST':
                return <Button style={BtnStyle} btnTxt={'Add To Cart'} onClick={addCart}/>
            case 'CART':
                return <Button style={BtnStyle} btnTxt={'Add To Wishlist'} onClick={addWishlist}/>
            default:
                return <>
                        <Button btnTxt={'Add To Cart'} onClick={addCart}/>
                        <Button btnTxt={'Add To Wishlist'} onClick={addWishlist}/>
                       </>
        }
    }



    return (
        <div className='product-wrapper'>
            <div className='product-image'>
                <img src={productImage} alt="product image" />
            </div>
            <div className='product-info'>
                <h3 className='product-brand-name'>{brandName}</h3>
                <h4 className='product-name'>{productName}</h4>
                <div className='product-price'>Rs. {price}</div>
                <div className='action-btn'>
                    {
                        renderBtn(pageType)
                    }
                </div>
            </div>

        </div>
    )

}

export default ProductCard;