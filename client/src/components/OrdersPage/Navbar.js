import "./NavbarStyles.css"; 
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img.jpg';
function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo"><img style={{ width: '80px', height: '60px' }} src={logo}></img>
        <span className="info-name3">ONTHESHELF</span>
        </div>        <ul className="menu" style={{textDecoration: 'none'}}>
          <li><Link to={'/dashboard'}>Home</Link></li>
          <li><Link to={'/orders'}>Orders</Link></li>
          <li><Link to={'/stocks'}>Stocks</Link></li>
          <li><Link to={'/login'}>
            <Button>Logout</Button>
            </Link></li>
        </ul>
      </nav>
  )
}

export default Navbar
