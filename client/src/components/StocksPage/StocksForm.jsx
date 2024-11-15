import { useEffect, useState } from "react";

function StocksForm(props)
{
    const [stock_detail,setStockDetail] = useState(props.stock_detail_value);
    const [ppu,setPPU] = useState(props.ppu_value);
    const [quantity,setQuantity] = useState(props.quantity_value);
    const [total,setTotal] = useState(props.total_value);

    useEffect(()=>{
        setStockDetail(props.stock_detail_value);
        setPPU(props.ppu_value);
        setQuantity(props.quantity_value);
        setTotal(props.total_value);
    },[props.stock_detail_value,props.ppu_value,props.quantity_value,props.total_value]);
   
    const arr = [stock_detail,ppu,quantity,total];
   
    const handleClick = () =>{
        props.getState(arr);
    }

    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input required="true"  defaultValue={props.stock_detail_value} onChange={(event)=>setStockDetail(event.target.value)} class="form-control my-3" placeholder="Enter the Stock Detail" />
            <input required="true"  defaultValue={props.ppu_value} onChange={(event)=>setPPU(event.target.value)} class="form-control my-3" placeholder="Enter the Price per unit" />
            <input required="true"  defaultValue={props.quantity_value} onChange={(event)=>setQuantity(event.target.value)} class="form-control my-3" placeholder="Enter the quantity" />
            <input required="true"  defaultValue={props.total_value} onChange={(event)=>setTotal(event.target.value)} class="form-control my-3" placeholder="Enter the total value" />
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}

export default StocksForm;
