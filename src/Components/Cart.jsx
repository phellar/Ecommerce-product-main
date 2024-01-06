import React from 'react'
import {useState} from 'react'
import RemoveIcon from '../assets/icon-delete.svg'

const Cart = ({cartItems,handleDelete,total,emptyMsg,handleCount,count}) => {
    
  return (
    <div className='cart-state'>
        <div className="cart-heading">
            <h2>Cart</h2>
            {emptyMsg}
            
        </div>
            
        {cartItems.map((item, id) =>(
            <div className="product-in-cart" key={item.id}>
                <div><p>{item.img}</p></div>
                
                <div>
                    <p>{item.product}</p>
                    <p>${item.price}</p>
                    <p>{()=>total()}</p>
                </div>
                

                <img src={RemoveIcon} alt="" height="20px"  onClick={(id)=>handleDelete(item.id)}/>
                
            </div>
            
            
        ))}

        <p>{emptyMsg}</p>

       
        <button className='checkout-btn'>Checkout</button>
    </div>
  )
}

export default Cart