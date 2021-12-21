import React from "react";
import './emptyListContent.css';

const EmptyListContent = ({ text='' }) => {

    return(
        <div className='empty-list-text'>{text}</div>
    )

}

export default EmptyListContent;