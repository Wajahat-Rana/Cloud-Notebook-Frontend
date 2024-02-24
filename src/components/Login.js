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
      localStorage.setItem('token',json.authtoken)
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
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="card p-4" style={{ width: '60vw' }}>
          <h2 className="text-center mb-4">Login</h2>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} minLength={8} required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  )
}

export default Login