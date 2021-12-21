import React from "react";
import './loader.css';

const Loader = ({ show =false}) => {

    if(!show)
     return;

    return(
        <div className='loader'></div>
    )

}

export default Loader;