import React from 'react'
import {useState} from 'react'
import RemoveIcon from '../assets/icon-delete.svg'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Cart = ({cartItems,handleDelete,total,handleCount,count}) => {
    

  

    

  return (
    <div className='cart-state'>
        <div className="cart-heading">
            <h2>Cart</h2>
            {/* {emptyMsg} */}
    
            
        </div>
            <div className="cart-item">

                {cartItems.length >=1 ? <div className="">
                {cartItems.map((item, id) =>(
                <div className="" key={item.id}>
                        <div className="">

                            <div className="product-in-cart" >
                                <div><p>{item.img}</p></div>
                                
                                <div>
                                    <p>{item.product}</p>
                                    <p>${item.price}</p>
                                    
                                </div>
                    

                            <img src={RemoveIcon} alt="" height="20px"  onClick={(id)=>handleDelete(item.id)}/>
                        </div>
                    
                   
                </div>
                
                
                            </div>
                
                ))}
            <div className="">
                <button className='checkout-btn'>Checkout</button>

            </div>
                </div> : <h4 className='empty-cart'>Your cart is empty.</h4>}

            

      
            </div>
    </div>
  )
}

export default Cart