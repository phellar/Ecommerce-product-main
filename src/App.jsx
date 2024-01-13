import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Product from './Components/Product'
import ProductImg from './assets/image-product-1.jpg'
import {v4 as uuidv4} from 'uuid'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



function App() {

  const [count, setCount] = useState(0)
  const [isOpen, setIsopen] = useState(false)
  const [isToggle, setIsToggle] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
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
      const handleAdd = () => {
          if(count >= 1){
            const newProduct ={
              id: uuidv4(), product: 
              "Fall limited Edition Sneakers",
              price: 125.00,
              img: <img src={ProductImg} alt="" width="50px" style={{borderRadius: 5}}/>
            } 
          // console.log(newProduct)
          setCartItems([newProduct,...cartItems])
          setCount(0)
          notification();  
          }

      }

       
      // Display Notification when product is being added to cart

      const notification = () => {
        toast.success('product Added to Cart', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          }); 
      }



  return (
    <>
    
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
   

      <Header isOpen ={isOpen}
            cartOpen ={cartOpen}
            cartItems={cartItems}
            handleDelete ={handleDelete}
            handleToggle ={handleToggle}
            isToggle={isToggle}
            // emptyMsg={handleCartMessage}
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
            handleNotification ={notification}
            // total ={total}
            
            

        />


      </div>
    </>
  )
}

export default App
