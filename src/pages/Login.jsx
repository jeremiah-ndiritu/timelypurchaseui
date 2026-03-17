import { Link } from "react-router-dom"
import { useState } from "react"
export default function Login(){
    const[formData,setFormData] = useState({
        fullName:"",
        email:"",
        remember:false
    })
     const handleSubmit = () =>{
        e.preventDefault() //prevent default form submission
    }
    console.log(formData)
    const handleChange = (e) =>{
        const{name,type, value, checked} = e.target
        setFormData({
            ...formData,
            [name]: type === "checkbox"?
            checked:value
        })
    }
    return(
        <div className="login">
            <h2>Login<br/><p style={{fontWeight:"300"}}>Welcome back!</p></h2>
        <form onSubmit={handleSubmit}>
            <label>Email Address<br/>
                <input
                name="email"
                type="email"
                placeholder="Enter email address..."
                onChange={handleChange}
                required
                />
            </label><br/>
            <label>Password<br/>
                <input
                name="password"
                type="password"
                placeholder="Enter password..."
                onChange={handleChange}
                required
                />
            </label><br/>
            <div className="options">
            <div className="remember">
            <p><input 
            type="checkbox"
            name="remember" 
            onChange={handleChange}
            />Remember me</p>
            </div>
            <Link>Forgot Password?</Link>
            </div>
            <button type="submit">Submit</button>
        </form>
        <p>Don't have an account? <Link to="/signup" style={{color:"#65abe4ff", textDecoration:"underline"}}>Sign Up</Link></p>
        </div>
    )
}