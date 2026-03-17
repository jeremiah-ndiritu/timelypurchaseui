import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () =>{
    const navigate = useNavigate()
    const handleSign = ()=>{
        navigate("/signup")
    }
    const handleLog = ()=>{
        navigate("/login")
    }

    return(
       <nav className="navbar">
        <div className="logo">
            <img src="logo6.png" alt="Timely Purchase"/>
            <h3>Timely<br/>Purchase</h3>
        </div>
        <ul className="nav-list">
            <li>
                <NavLink to="/" className={({isActive})=> 
                (isActive?"active":"")}>Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/products" className={({isActive})=> 
                (isActive?"active":"")}>Products
                </NavLink>
            </li>
            <li>
                <NavLink to="/orders" className={({isActive})=> 
                (isActive?"active":"")}>Orders
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive})=> 
                (isActive?"active":"")}>About
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({isActive})=> 
                (isActive?"active":"")}>Contact
                </NavLink>
            </li>
        </ul>
        <div className="auth-btns">
        <button className="auth" onClick={handleSign}>Sign Up</button>
        <button className="auth" onClick={handleLog}>Login</button>
        </div>
       </nav>
    )

}
export default Navbar;