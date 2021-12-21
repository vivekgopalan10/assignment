import React from 'react';
import { connect } from 'react-redux';
import Header from '../../component/header/header';
import ProductCard from '../../component/productCard/productCard';
import { removeFromWishlist } from '../../store/actions/wishlistActions';
import { addToCart } from '../../store/actions/cartActions';
import EmptyListText from '../../component/emptyListContent/emptyListContent';
import './index.css';



const Wishlist = ({wishlistData,addToCart,removeFromWishlist}) => {

    const AddToCart = data => {
        const productId = data && data.id;
        removeFromWishlist(productId);
        addToCart(data);
    }

    return (
        <>
            <Header  pageType='WISHLIST' />
            <div className='dashboard-wrapper'>
                {
                    wishlistData.map((data,index)=> <ProductCard key={index} pageType='WISHLIST' productImage={data.productImage} brandName={data.brandName} productName={data.productName} price={data.price} addCart={()=>AddToCart(data)}/>)
                }

                {
                    (wishlistData.length===0)&&
                    <EmptyListText text="Your Wishlist is Empty."/>
                }
            </div>
        
        
        </>
    )

}


const mapStateToProps = ({wishlist}) => {
    return {
        wishlistData: wishlist.wishlistData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromWishlist:(productId) => dispatch(removeFromWishlist(productId)),
        addToCart:(productData)=>dispatch(addToCart(productData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)



