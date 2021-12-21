import React from 'react';
import { connect } from 'react-redux';
import Header from '../../component/header/header';
import ProductCard from '../../component/productCard/productCard';
import { addToWishlist } from '../../store/actions/wishlistActions';
import { removeFromCart } from '../../store/actions/cartActions';
import EmptyListText from '../../component/emptyListContent/emptyListContent';
import './index.css';



const Cart = ({cartData,addToWishlist,removeFromCart}) => {

    const AddToWishlist = data => {
        const productId = data && data.id;
        removeFromCart(productId);
        addToWishlist(data);
    }

    return (
        <>
            <Header  pageType='CART' />
            <div className='dashboard-wrapper'>
                {
                    cartData.map((data,index)=> <ProductCard key={index} pageType='CART' productImage={data.productImage} brandName={data.brandName} productName={data.productName} price={data.price} addWishlist={()=>AddToWishlist(data)}/>)
                }
                {
                    (cartData.length===0)&&
                    <EmptyListText text="Your Cart is Empty."/>
                }
            </div>
        
        
        </>
    )

}


const mapStateToProps = ({cart}) => {
    return {
        cartData: cart.cartData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart:(productId) => dispatch(removeFromCart(productId)),
        addToWishlist:(productData)=>dispatch(addToWishlist(productData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)



