import { Link } from "react-router-dom"
import { useState } from "react"
export default function SignUp(){
    const[formData,setFormData] = useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:"",
        agree:false
    })
    const[schoolId,setSchoolId] = useState(null)

    const handleSubmit = () =>{
        e.preventDefault() //prevent default form submission
    }
    const handleChange = (e) =>{
        const{name,type,value,checked} = e.target
        setFormData({
            ...formData,
            [name]: type === "checkbox"?
            checked:value
        })
    }
    const handleFileChange = (e) =>{
        setSchoolId(e.target.files[0])
    }
    const data = new FormData();
    data.append("fullName",formData.fullName)
    data.append("email",formData.email)
    data.append("password",formData.password)
    data.append("schoolId",formData.schoolId)
    console.log("Form Data:", formData)
    console.log("File:", schoolId)

    return(
        <div className="sign">
            <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
            <label>Full Name<br/>
                <input
                name="fullName"
                type="text"
                placeholder="Enter full name..."
                onChange={handleChange}
                required
                /></label>
          <br/>
              <label>Upload School ID(PDF or Image)<br/>
                <input
                accept="image/*,.pdf"
                type="file"
                id="schoolId"
                placeholder="Add file..."
                onChange={handleFileChange}
                required
                /></label>
            <br/>
              <label>Email Address<br/>
                <input
                name="email"
                type="email"
                placeholder="Enter email address..."
                onChange={handleChange}
                required
                /></label>
            <br/>
            <label>Password<br/>
                <input
                name="password"
                type="password"
                placeholder="Enter password..."
                onChange={handleChange}
                required
                /></label>
            <br/>
            <label>Confirm Password<br/>
            <input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            onChange={handleChange}
            /></label>
            <p><input 
            type="checkbox" 
            name="agree"
            onChange={handleChange}/>
            Agree with <Link to="" style={{color:"#65abe4ff", textDecoration:"underline"}}>Terms and Conditions</Link></p>
            <button type="submit" disabled={!formData.agree}>Submit</button>
        </form>
        <p>Already have an account? <Link to="/login" style={{color:"#65abe4ff ", textDecoration:"underline"}}>Login</Link></p>
        </div>
    )
}