import React from 'react'
import Avatar from '../assets/image-avatar.png'
import CartIcon from '../assets/icon-cart.svg'
import Menu from '../assets/icon-menu.svg'
import CloseMenu from '../assets/icon-close.svg'
import Cart from './Cart'
import { useState } from 'react'



const Header = ({isOpen, cartOpen,cartItems,total,isToggle,handleToggle,handleDelete,handleAdd,handleCount,handleDecreaseCount,count}) => {
  return (
    <>
    
            <header className='header'>
                <div className="container">
            <nav className="navbar">
                <div className="navbar">

                    <div className="mobile-menu"  onClick={handleToggle}>
                    {/* <img src={Menu} alt=""  />  */}

                    {isToggle ? <img src={CloseMenu} />  : <img src={Menu} /> }

                    {isToggle && <div className="mobile-menu-item">
                        <img src={CloseMenu} /> 
                        <li><a href='/'>Collection</a></li>
                        <li><a href='/'>Men</a></li>
                        <li><a href='/'>Women</a></li>
                        <li><a href='/'>About</a></li>
                        </div> 
                    }

                    </div>

                   
                   <div className="div"><h1>Sneakers</h1></div>
                    


                <ul>
                    <li><a href='/'>Collection</a></li>
                    <li><a href='/'>Men</a></li>
                    <li><a href='/'>Women</a></li>
                    <li><a href='/'>About</a></li>
                </ul>
                </div>

                <div className='navbar'>
                        <div className="cart">
                        
                        <img src={CartIcon} width="30px"  onClick={cartOpen} />
                        {/* <div className="cart-length">{cartItems.length}</div> */}
                          
                        </div>
                        
                        <div className="profil">
                            <img src={Avatar}  width='40px' />
                        </div>

                </div>
            </nav>
            {isOpen && <Cart cartItems={cartItems}
             handleDelete={handleDelete}
            //  emptyMsg={handleCartMessage}
             
            //  handleAdd={handleAdd}
             handleCount = {handleCount}
            handleDecreaseCount = {handleDecreaseCount}
            count={count}
         
         
              /> }

            
            </div>
            
        </header>
         
    </>
  )
}

export default Header