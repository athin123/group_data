import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import StocksForm from "./StocksForm";
import Axios from "axios";

function AddStocks()
{
    const [arr,setArr] = useState([]);

    const getState = (childData) => {
        setArr(childData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {stock_detail: arr[0],ppu:arr[1],quantity:arr[2],total:arr[3]};
        Axios.post("https://ontheshelf-backend-render.onrender.com/Stocks_Route/create-stock",data)
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
        <br></br>
        <br></br>
        <Link to={'/stocks'}>
        <button2 id='b1'>RETURN</button2>
        </Link>
        <br></br><br></br><br></br><br></br><br></br>
        <form onSubmit={handleSubmit}>
            <StocksForm getState={getState}
                    stock_detail_value=""
                    ppu_value=""
                    quantity_value=""
                    total_value="">
                Create Stock
            </StocksForm>
        </form>
        
      </div>

    )
}
export default AddStocks;
