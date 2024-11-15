
import Axios from "axios";
import { Link } from "react-router-dom";

function StocksListRow(props) {
    const { _id, stock_detail, ppu, quantity,total,__v } = props.obj;

    const handleClick = () => {
        Axios.delete("https://ontheshelf-backend-render.onrender.com/Stocks_Route/delete-stock/"+ _id)
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
            <td>{stock_detail}</td>
            <td>{ppu}</td>
            <td>{quantity}</td>
            <td>{total}</td>
            <td class="d-flex justify-content-center">
                <Link class="text-decoration-none text-light me-4" to={"/editstock/"+_id}>
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
export default StocksListRow;
