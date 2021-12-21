import React, { useEffect } from "react";
import { connect } from 'react-redux';
import Header from '../../component/header/header';
import ProductCard from '../../component/productCard/productCard';
import { getProductList, removeFromProductList } from '../../store/actions/dashboardActions';
import { addToWishlist } from '../../store/actions/wishlistActions';
import { addToCart } from '../../store/actions/cartActions';
import Loader from '../../component/loader/loader';
import { getElementSize } from './getElementSize';
import VirtualScroll from '../../component/virtualScroll/virtualScroll';
import './index.css'







function VirtualPage({productList,getProductList,addToWishlist,addToCart,removeFromProductList}) {


  useEffect(()=>{
    getProductList();
  },[])

    const AddToWishlist = (data)=>{
        const productId = data && data.id;
        removeFromProductList(productId)
        addToWishlist(data)
    }
    const AddToCart = (data)=>{
        const productId = data && data.id;
        removeFromProductList(productId);
        addToCart(data);
    }

if(productList.length === 0)
return <Loader show={true} />



  const SETTINGS = {
    itemHeight: 445,
    amount: 5,
    tolerance: 5,
    minIndex: 0,
    maxIndex: 48,
    startIndex: 0
  };
  const getData = (offset, limit) => {
    const data = Array();
    const start = Math.max(SETTINGS.minIndex, offset);
    const end = Math.min(offset + limit - 1, SETTINGS.maxIndex);
    if (start <= end) {
      for (let i = start; i <= end; i++) {
        data.push({ index: i, renderComponent: <ProductCard productImage={productList[i].productImage} brandName={productList[i].brandName} productName={productList[i].productName} price={productList[i].price} addWishlist={()=>AddToWishlist(productList[i])} addCart={()=>AddToCart(productList[i])}/>   });
      }
    }
    return data;
  };

  const renderRowComponent = item => {
    const { index = 0 } = item
    return(
    <div className="row-item" key={index}>
      {item.renderComponent}
    </div>
    )
  }


  return(
    <>
      <Header/>
      <VirtualScroll  getData={getData} settings={SETTINGS} row={renderRowComponent}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(VirtualPage)


