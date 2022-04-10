import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProduct';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';
const Order = () => {
    const [products,setProducts] = useProducts();
    const [cart,setCart] = useCart(products);

    const handleRemovedProduct = product=>{
        const restProducts = cart.filter(item=>item.id !== product.id);
        setCart(restProducts);
        removeFromDb(product.id);
    }
  
    return (
        <div className='shop-container'>
            <div className='products-container'>
             {
                 cart.map(cartItem => <ReviewItem key={cartItem.id} cartItem={cartItem} handleRemovedProduct={handleRemovedProduct}></ReviewItem> )
             }
            </div>
        <div className='cart-container'>
                <Cart cart={cart}>
                     <Link to={"/shipments"}>
                         <button className='proceed-checkout-btn'>Proceed Shipping</button>
                         
                     </Link>
                </Cart>
             </div>
        </div>
      
    );
};

export default Order;