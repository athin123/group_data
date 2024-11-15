import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './addOrders.css';
import Navbar from './Navbar';
import OrdersForm from "./OrdersForm";
import Axios from "axios";

function AddOrders()
{
    const [arr,setArr] = useState([]);

    const getState = (childData) => {
        setArr(childData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {order_detail: arr[0],ppu:arr[1],quantity:arr[2],total:arr[3]};
        Axios.post("https://ontheshelf-backend-render.onrender.com/Inv_Route/create-order",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
        event.target.reset();
    }

    return (
        <div className="main-content2">
        <Navbar />
        <br></br>
        <br></br>
        <br></br>        <br></br>
        <Link to={'/orders'}>
        <button2 id='b1'>RETURN</button2>
        </Link>
        <br></br><br></br><br></br><br></br><br></br>
        <form onSubmit={handleSubmit}>
            <OrdersForm getState={getState}
                    order_detail_value=""
                    ppu_value=""
                    quantity_value=""
                    total_value="">
                Create Order
            </OrdersForm>
        </form>
        </div>
    )
}
export default AddOrders;
