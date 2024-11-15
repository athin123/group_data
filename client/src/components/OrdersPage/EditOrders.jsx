import { useParams } from "react-router-dom";
import OrdersForm from "./OrdersForm";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";
import Navbar from './Navbar'

function EditOrders() {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ order_detail: "", ppu: "", quantity: "" ,total:"",__v:""});
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("https://ontheshelf-backend-render.onrender.com/Inv_Route/update-order/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { order_detail, ppu, quantity,total } = res.data;
                    setInitialValue({ order_detail, ppu, quantity, total});
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
        const data = { order_detail: newData[0], ppu: newData[1], quantity: newData[2],total: newData[3]};
        Axios.put("https://ontheshelf-backend-render.onrender.com/Inv_Route/update-order/" + id, data)
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
        <Link to={'/orders'}>
        <button2 id='b1'>RETURN</button2>
        </Link>
        <br></br><br></br><br></br><br></br><br></br>
        <form onSubmit={handleSubmit}>
            <OrdersForm getState={getState}
                    order_detail_value={initialValue.order_detail}
                    ppu_value={initialValue.ppu}
                    quantity_value={initialValue.quantity}
                    total_value={initialValue.total}>
                Edit Order
            </OrdersForm>
        </form>
        </div>
    )
}
export default EditOrders;
