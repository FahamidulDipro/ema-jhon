import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';
const Product = props => {
    const {items,handleAddToCart} = props;
    const {category,name,seller,price,stock,ratings,ratingsCount,img,shipping,quantity} = items;
    // const {handleAddToCart} = props;
    return (
        <div >
            <div className="single-product-container">
                <div className='img-container'>
               <img src={img} alt="product" className='image'/>
               </div>
               <h3>{name}</h3>
               <p style={{fontSize:'17px',fontWeight:'Bold'}}>Price: ${price}</p>
               <p><b>Manufacturer: </b>{seller}</p>
               <p><b>Rating: </b>{ratings}</p>
               <div className='add-to-cart'>
                   <a href="#" onClick={()=>handleAddToCart(items)}>Add To Cart  &nbsp;<FontAwesomeIcon icon={faCartShopping} /></a>
               </div>
            </div>
        </div>
    );
};

export default Product;