import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
    const {category,name,seller,price,stock,ratings,ratingsCount,img,shipping,quantity} = props.cartItem;
    const {product,handleRemovedProduct} = props;

    return (
        <div className='cartItem-container'>
            <div className="image-container">
                <img src={img} alt="itemImage" />
            </div>
            <div className="text-container">
             <h4 title={name}>{name.length>20?name.slice(0,20)+'...':name}</h4>
             <p><b>Price: </b><span>${price}</span></p>
             <p><b>Shipping Charge: </b><span>${shipping}</span></p>
            </div>
            <div className="delete-container">
                <button> <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={()=>handleRemovedProduct(props.cartItem)}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default ReviewItem;