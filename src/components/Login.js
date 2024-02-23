import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({email: "",password: ""})
    const handleLogin = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: credentials.email,password: credentials.password})
        });
        const json = await response.json();
        console.log(json)
        if(json.success){
            navigate('/')
        }else{
            console.log("Cannot Redirect")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }
    const navigate = useNavigate();

  return (
    <form onSubmit={handleLogin}>
<div className="container">
  <div className="mb-3">
    
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email"  className="form-control" id="email" name='email' aria-describedby="emailHelp" value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
  )
}

export default Login