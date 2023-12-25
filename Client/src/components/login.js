
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'; // Import the CSS file
// const host='http://localhost:5000'
const host='https://automatic-child-vaccination-alert-35ol.vercel.app'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ name: "", password: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged in successfully", "success");
            navigate('/wel')

        }
        else {
            props.showAlert("Invalid details", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
       
        <div className='custom'>
            <section className="form-section">
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center" >
                        <div className="form-container">
                            <form onSubmit={handleSubmit}>
                                <p>Please login to your account</p>
                                <div className="form-outline mb-4 col-lg-10 align-items-center justify-content-center">
                                    <label htmlFor="name" className="form-label">Hospital name</label>
                                    <input type="name" className="form-control" value={credentials.name} onChange={onChange} id="name" name="name" />
                                </div>
                                <div className="form-outline mb-4 col-lg-10">
                                   <label htmlFor="password" className="form-label">Password</label>

                                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                                </div>
                                <div className="text-center pt-1 mb-5 pb-1">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login