import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css';
import useProducts from '../Hooks/useProduct';
import { Link } from 'react-router-dom';
const Shop = () => {
     const [products,setProducts] = useProducts();
    const [cart,setCart] = useState([]);
    
 

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
           const addedProducts = products.find(product=>product.id === id);
          if(addedProducts){
              const quantity = storedCart[id];
              addedProducts.quantity = quantity; 
              savedCart.push(addedProducts);
          }

        }
        setCart(savedCart);
    },[products])
    const handleAddToCart = (selectedProduct)=>{
        let newCart = [];
        const exists = cart.find(product=>product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart,selectedProduct];
        }else{
            const rest = cart.filter(product=>product.id !== selectedProduct.id);
            exists.quantity = exists.quantity+1;
            newCart = [...rest,exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
        
    }
    return (
        <div>
              <h2>Showing results for {products.length} products</h2>
            <section className='shopSection'>
          
                <div className='product-container'>
                   
                    {
                        products.map(product=><Product key={product.id} items={product} handleAddToCart={handleAddToCart}></Product>)
                        
                    }
                 
                 
                </div>
                <div className='order-summary-container'>
                    <Cart cart={cart}>
                        <Link to={"/order"}>
                            <button className='review-order-btn'>Review Order</button>
                        </Link>
                    </Cart>
                </div>
          
            </section> 
            
        </div>
    );
};

export default Shop;