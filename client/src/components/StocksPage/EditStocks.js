import { useParams } from "react-router-dom";
import StocksForm from "./StocksForm";
import { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from './Navbar'
import { Link } from 'react-router-dom';


function EditStocks() {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ stock_detail: "", ppu: "", quantity: "" ,total:"",__v:""});
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("https://ontheshelf-backend-render.onrender.com/Stocks_Route/update-stock/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { stock_detail, ppu, quantity,total, } = res.data;
                    setInitialValue({ stock_detail, ppu, quantity, total});
                }
                else    
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }, [id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = { stock_detail: newData[0], ppu: newData[1], quantity: newData[2],total: newData[3]};
        Axios.put("https://ontheshelf-backend-render.onrender.com/Stocks_Route/update-Stock/" + id, data)
            .then((res) => {
                if (res.status === 200)
                    alert("Record updated successfully")
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }
    return (
        <div className="main-content2">
        <Navbar />
        <br></br>
        <br></br>
        <br></br>        <br></br>
        <Link to={'/stocks'}>
        <button2 id='b1'>RETURN</button2>
        </Link>
        <br></br><br></br><br></br>
        <br></br><br></br><br></br>
        <form onSubmit={handleSubmit}>
            <StocksForm getState={getState}
                    stock_detail_value={initialValue.stock_detail}
                    ppu_value={initialValue.ppu}
                    quantity_value={initialValue.quantity}
                    total_value={initialValue.total}>
                Edit Stock
            </StocksForm>
        </form>
        </div>

    )
}
export default EditStocks;
