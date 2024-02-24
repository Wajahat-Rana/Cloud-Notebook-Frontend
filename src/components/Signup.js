import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({username: "",email: "",password: ""})


  const navigate = useNavigate()

  const handleSignup = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username: credentials.username,email: credentials.email,password: credentials.password})
    });
    const json = await response.json();
    console.log(json)
    if(json.success){
      props.showAlert("Account Created.","success")

      localStorage.setItem('token',json.authToken)
        navigate('/login')
    }else{
      const message = json.error;
      props.showAlert(message,"danger")
        console.log("Cannot Redirect")
    }
}
const onChange = (e) => {
  setCredentials({ ...credentials, [e.target.name]: e.target.value });
};

  return (

      <form onSubmit={handleSignup}>
      <div className="container d-flex justify-content-center align-items-center mt-5">
    <div className="card p-4" style={{ width: '80%' }}>
    <h2 className="text-center mb-4">Sign Up</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="username" value={credentials.username} onChange={onChange} minLength={3} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} minLength={8} required />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
    </div>
    </div>
      </form>
  );
};

export default Signup;
