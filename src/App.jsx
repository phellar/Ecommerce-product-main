import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Product from './Components/Product'
import ProductImg from './assets/image-product-1.jpg'
import {v4 as uuidv4} from 'uuid'


function App() {

  const [count, setCount] = useState(0)
  const [isOpen, setIsopen] = useState(false)
  const [isToggle, setIsToggle] = useState(false)
  const [emptyMsg, setEmptyMsg] = useState("")
  const [cartItems, setCartItems] = useState([
    // {
    //   id: 1, product: 
    //   "Fall limited Edition Sneakers",
    //    price: 125.00,
    //    img: <img src={ProductImg} alt="" width="50px" style={{borderRadius: 5}}/>
    // },
    // {
    //   id: 2, product: 
    //   "Fall limited Edition Sneakers",
    //    price: 125.00,
    //    img: <img src={ProductImg} alt="" width="50px" style={{borderRadius: 5}}/>
    // }
  ])

        const handleCount = () =>{
          setCount(count +1)
        }
        const handleDecreaseCount = () =>{
          setCount(count -1)

          if (count <1){
            setCount(0)
          }
        }
        // open mobile menu
        const handleToggle = () => {
          setIsToggle(!isToggle)
        }

        // open and close cart
        const cartOpen = () => {
          setIsopen(!isOpen)
        }

        // Delete item from cart
        const handleDelete = (id) =>{
            setCartItems(cartItems.filter((item) => item.id !==id))
      }

      // Check to see if cart is empty and push empty cart message
     
      const handleCartMessage = ()=>{
        if(cartItems.length ===0){
          setEmptyMsg(" Your cart is empty")
        }
      }

      // Add product to cart
      const handleAdd = ()=>{
          if(count >= 1){
            const newProduct ={
              id: uuidv4(), product: 
              "Fall limited Edition Sneakers",
              price: 125.00,
              img: <img src={ProductImg} alt="" width="50px" style={{borderRadius: 5}}/>
            } 
          // console.log(newProduct)
          setCartItems([newProduct,...cartItems])

          }

          // calculateTotal
            // const total =()=>{
            //   cartItems.price * cartItems.length
            // }

      }
       
     
    



 




  return (
    <>
      <Header isOpen ={isOpen}
            cartOpen ={cartOpen}
            cartItems={cartItems}
            handleDelete ={handleDelete}
            handleToggle ={handleToggle}
            isToggle={isToggle}
            emptyMsg={emptyMsg}
            handleAdd={handleAdd}
            handleCount = {handleCount}
            handleDecreaseCount = {handleDecreaseCount}
            count={count}
            // total ={total}
           

      />


      <div className="container">

        <Product
            handleCount = {handleCount}
            handleDecreaseCount = {handleDecreaseCount}
            count={count}
            handleAdd={handleAdd}
            cartItems={cartItems}
            // total ={total}
            
            

        />


      </div>
    </>
  )
}

export default App
