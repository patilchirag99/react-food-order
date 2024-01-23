import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import CartItem from './CartItem';
import {useSelector} from "react-redux"
const Cart = () => {
  
  const [activeCart, setActiveCart] = useState(true)
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  return (
    <>
        <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 mb-3 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}> 

            <div className='flex justify-between items-center my-3'>
                <span className='text-xl font-bold text-gray-800'>My Orders</span>
                <IoMdClose className='border-2 border-gray-600 text-gray-600 font-bold p-1 rounded-md hover:text-red-300 hover:border-red-300 text-2xl cursor-pointer '
                onClick= {() =>{setActiveCart(!activeCart)}}/>
            </div>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <div className='absolute bottom-0 '>
            <h3 className='font-semibold text-gray-800'>Items : </h3>
            <h3 className='font-semibold text-gray-800'>Total amount : </h3>
            <hr className='w-[90vw] lg:w-[18vw] my-2'></hr>
            <button className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg lg:w-[18vw] w-[90vw] mb-5'> Checkout</button>
        </div>
        </div>

       
    </>
  )
}

export default Cart;