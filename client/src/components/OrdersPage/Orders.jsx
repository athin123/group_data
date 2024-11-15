import "./Orders.css"
import React from 'react'
import Navbar from './Navbar'
import Buttons from './Buttons'
import OrderHome from "./Home_order";


const Orders = () => {
  return (
    <div className=" main-content2">
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Buttons />
      <OrderHome/>
    </div>
  )
}

export default Orders
