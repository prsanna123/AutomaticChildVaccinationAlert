import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'; // Import the CSS file
const host='http://localhost:5000'
// const host='https://automatic-child-vaccination-alert-35ol.vercel.app'
const SignUp = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("submitted");

    e.preventDefault();

    const { name, email, password, cpassword } = credentials;
    // console.log(credentials)
    const response = await fetch(`${host}/api/auth/createuser`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      console.log("jsonsuccess")
      navigate('/wel')

      props.showAlert("account created successfully", "success");
    }
    else {
      props.showAlert("Invalid credentials", "danger");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className="container custom ">
     <h2 className="my-5 mx-5">Create account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label mx-5">Name*</label>
          <input type="text" className="custom form-control" id="name" name="name" placeholder='Hospital Name ' onChange={onChange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text mx-5">We'll never share your email with anyone else.</div>
        </div>
        <div className=" form-group mb-3">
          <label htmlFor="email" className="form-label mx-5">Email address*</label>
          <input type="email" className="custom form-control" id="email" name="email" placeholder='Email Address' onChange={onChange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text mx-5">We'll never share your email with anyone else.</div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password" className="form-label mx-5">Password*</label>
          <input type="password" className="custom form-control" name="password" placeholder='Password' onChange={onChange} minLength={5} required id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label mx-5">Confirm Password*</label>
          <input type="cpassword" className="custom form-control" name="cpassword"  placeholder='Confirm Password' onChange={onChange} id="cpassword" minLength={5} required />
        </div>
        <button type="submit" className="btn btn-primary mx-5">Submit</button>
      </form>
    </div>
  )
}

export default SignUp