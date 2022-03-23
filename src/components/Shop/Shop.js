import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    
    useEffect(()=>{
        fetch('products.json').then(res=>res.json()).then(data=>setProducts(data));
    },[])
    const handleAddToCart = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
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
                    <Cart cart={cart}></Cart>
                </div>
          
            </section> 
            
        </div>
    );
};

export default Shop;