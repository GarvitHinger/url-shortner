import logo from "../../images/logo.svg";
import './NavBar.css';
const NavBar = () => {
    return (
        <div className='nav-bar'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='log-info'>
                <button className="signin">LOGIN</button>
            </div>
        </div>
    )
}

export default NavBar;