import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import "./index.css";

//import Logo from './logo.svg'

const Header = () => {
  return (
    <div className="header-container">
      <div className="home-login-container">
      <Link className="link" to="#">
          <p className="sprit"> 
          <img className="logos" src='https://media.licdn.com/dms/image/C510BAQFEpFHWZMVDRA/company-logo_200_200/0/1519893946434?e=2147483647&v=beta&t=nlkQL8i_V1Ke4BdGUjDndBsRSmzTmPCZ0-N7VKfH6lE' alt='logo'/>
          Ticket Booking
           </p>
          
        </Link>
        <Link className="link" to="/">
          <p className="text">Home <HomeIcon/> </p>
     
        </Link>
        
        <Link className="link" to="/login">
          <p className="text">Login <LoginIcon/></p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
