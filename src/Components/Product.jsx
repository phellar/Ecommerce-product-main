import React from 'react'
import ProductImg from '../assets/image-product-1.jpg'
import Thumbnail1 from '../assets/image-product-1-thumbnail.jpg'
import Thumbnail2 from '../assets/image-product-2-thumbnail.jpg'
import Thumbnail3 from '../assets/image-product-3-thumbnail.jpg'
import Thumbnail4 from '../assets/image-product-4-thumbnail.jpg'
import Plus from '../assets/icon-plus.svg'
import Minus from '../assets/icon-minus.svg'
import { useState } from 'react'

const Product = ({handleCount,count,total,handleDecreaseCount,handleAdd,cartItems}) => {
  return (
    
    <div className="product-section">
   
        <div className="">
            <div className='product-show-off'>
                <img src={ProductImg} width="400px" alt=""  />
            </div>

            <div className="product-thumbnails">
                <img src={Thumbnail1} width="80px" alt="" style={{borderRadius: 5}} />
                <img src={Thumbnail2} width="80px" alt="" style={{borderRadius: 5}} />
                <img src={Thumbnail3} width="80px" alt="" style={{borderRadius: 5}} />
                <img src={Thumbnail4} width="80px" alt="" style={{borderRadius: 5}} />
            </div>
        </div>

        <div className="product-full-info">
                <div className="product-info">
                    <span>SNEAKER COMPANY</span>
                    <h1>Fall Limited Edition <br/> Sneakers</h1>
                    <p>These low-profile sneakers are your perfect casual wear companion.
                        Featuring a durable outer sole,they'll withstand anything the weather can offer.
                    </p>

                    <ul>
                        <li>$125.00</li>
                        <li>50%</li>
                    </ul>

                    <span className='slash-price'>$250.00</span>
                </div>

                <div className="cta">
                        <div className="counter">
                                <button className='cta-1' onClick={handleDecreaseCount}>
                                    <img src= {Minus} />
                                </button>
                                <p>{count}</p>
                                <button className='cta-2' onClick={handleCount}>
                                    <img src= {Plus} />
                                </button>
                        </div>
                        <button className='add-to-cart' onClick={handleAdd}>Add to cart</button>
                </div>

    </div>

    </div>
       
  )
}

export default Product
