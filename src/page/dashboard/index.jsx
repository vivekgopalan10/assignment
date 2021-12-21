import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../component/header/header';
import ProductCard from '../../component/productCard/productCard';
import { getProductList, removeFromProductList } from '../../store/actions/dashboardActions';
import { addToWishlist } from '../../store/actions/wishlistActions';
import { addToCart } from '../../store/actions/cartActions';
import Loader from '../../component/loader/loader';
import './index.css';



const Dashboard = ({productList,getProductList,loaded,addToWishlist,addToCart,removeFromProductList}) => {

    useEffect(()=>{
        if(!loaded)
        getProductList();
    },[])

    const AddToWishlist = data => {
        const productId = data && data.id;
        removeFromProductList(productId);
        addToWishlist(data);
    }

    const AddToCart = data => {
        const productId = data && data.id;
        removeFromProductList(productId);
        addToCart(data);
    }


    if(productList && productList.length === 0)
        return <Loader show={true} />;

    return (
        <>
            <Header />
            <div className='dashboard-wrapper'>
                {
                    productList.map((data,index)=> <ProductCard productImage={data.productImage} brandName={data.brandName} productName={data.productName} price={data.price} addWishlist={()=>AddToWishlist(data)} addCart={()=>AddToCart(data)}/>)
                }

            </div>
        
        
        </>
    )

}


const mapStateToProps = ({dashboard}) => {    
    return dashboard;
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromProductList:(productId) => dispatch(removeFromProductList(productId)),
        addToWishlist:(productData)=> dispatch(addToWishlist(productData)),
        addToCart:(productData)=>dispatch(addToCart(productData)),
        getProductList: ()=>dispatch(getProductList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)



