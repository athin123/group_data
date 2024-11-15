
import Axios from "axios";
import { Link } from "react-router-dom";

function OrdersListRow(props) {
    const { _id, order_detail, ppu, quantity,total,__v } = props.obj;

    const handleClick = () => {
        Axios.delete("https://ontheshelf-backend-render.onrender.com/Inv_Route/delete-order/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully");
                    window.location.reload();
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }


    return (
        <tr>
            <td>{order_detail}</td>
            <td>{ppu}</td>
            <td>{quantity}</td>
            <td>{total}</td>
            <td class="d-flex justify-content-center">
                <Link class="text-decoration-none text-light me-4" to={"/editorder/"+_id}>
                    <button class="btn btn-success">
                        Edit
                    </button>
                </Link>
                <button onClick={handleClick} class="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}
export default OrdersListRow;
