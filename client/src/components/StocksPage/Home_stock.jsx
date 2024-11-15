import React, { Fragment } from 'react'
import { Button, Table } from 'react-bootstrap'
import Axios from "axios";
import { useEffect, useState } from "react";
import StocksListRow from './StocksListRow';

function StockList()
{
    const [arr,setArr] = useState([]);
    
    useEffect(()=>{
        Axios.get("https://ontheshelf-backend-render.onrender.com/Stocks_Route")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=> alert(err));
    },[]);

    const ListItems = () =>{
      return arr.map((val,ind)=>{  //[{_id,name,email,rollNo},{},{},{}]
          return <StocksListRow obj={val}/>
      })
    }

    return (
        <table style={{maxWidth:"60%", margin: "50px auto"}} class="table table-bordered text-center table-striped table-dark">
            <thead>
                <tr>
                    <th class="text-center">Stock Detail</th>
                    <th class="text-center">Price per Unit</th>
                    <th class="text-center">Quantity</th>
                    <th class="text-center">Total</th>
                    <th class="text-center">Modify / Delete</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}
export default StockList;
