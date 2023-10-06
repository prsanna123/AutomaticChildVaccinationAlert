// import React, { useState } from 'react';
// import {Link} from "react-router-dom"
// function Hospital(props) {
//   const [formData, setFormData] = useState({
//     parentName: '',
//     phoneNumber: '',
//     birthDate: '',
//     hospitalname:''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const {parentName,phoneNumber,birthDate,hospitalname}=formData
//     const response=await fetch("http://localhost:5000/api/auth/addchild",{
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify({hospitalname,parentName,phoneNumber,birthDate})
//     })
//     const json=await response.json()
//     console.log(formData);
//     console.log(json)
//     if(json){
//       props.showAlert("Added the child data successfully","success");
//       setFormData({
//         parentName:'',
//         phoneNumber:'',
//         birthDate: '',
//         hospitalname:''
//       })
//       console.log("successfully added child data")
//     }
//     else{
//       console.log("error occured in adding child data")
//     }
//   };

//   return (
//     <div>
//       <h1>User Information Form</h1>
//       <form onSubmit={handleSubmit}>
//       <div>
//           <label htmlFor="hospname">HospitalName:</label>
//           <input
//             type="text"
//             id="hname"
//             name="hospitalname"
//             value={formData.hospitalname}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="parentName">Parent's Name:</label>
//           <input
//             type="text"
//             id="parentName"
//             name="parentName"
//             value={formData.parentName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="birthDate">Birthdate:</label>
//           <input
//             type="date"
//             id="birthDate"
//             name="birthDate"
//             value={formData.birthDate}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       <Link to="/wel">
//         <button>back</button>
//       </Link>
//     </div>
//   );
// }

// export default Hospital;


import React, { useState } from 'react';
import { Link } from "react-router-dom"
function Hospital(props) {
  const [formData, setFormData] = useState({
    parentName: '',
    phoneNumber: '',
    birthDate: '',
    hospitalname: '',
    bloodgroup: '',
    weight: '',
    email: '',
    address: '',
    age: '',
    surname: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { parentName, phoneNumber, birthDate, hospitalname, bloodgroup, weight, email, address, age, surname, time } = formData
    const response = await fetch("http://localhost:5000/api/auth/addchild", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ hospitalname, parentName, phoneNumber, birthDate, bloodgroup, weight, email, address, age, surname, time })
    })
    const json = await response.json()

    // You can handle form submission here, e.g., send the data to an API
    console.log(formData);
    console.log(json)
    if (json) {
      console.log("successfully added child data")
      props.showAlert("Logged in successfully", "success");
      setFormData({
        parentName: '',
        phoneNumber: '',
        birthDate: '',
        hospitalname: '',
        bloodgroup: '',
        weight: '',
        email: '',
        address: '',
        age: '',
        surname: '',
        time: '',
      })
    }
    else {
      console.log("error occured in adding child data")
    }
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="card">
          <div className="card-header text-center">
            <h2 id="mainheader">Registration Form</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group col-md-5">
                <label htmlFor="hospname" className="d-flex">Hospital Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="hname"
                  name="hospitalname"
                  value={formData.hospitalname}
                  onChange={handleChange}
                  placeholder='Hospital Name'
                  required
                />
              </div>
              <br />


              {/* <div>
          <label htmlFor="parentName">Parent's Name:</label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="birthDate">Birthdate:</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </div> */}

              {/* <form> */}
              <h5 className='d-flex'>Parent Information :</h5><br />
              <div className="form-row">
                <div className="form-group col-md-5">
                  <label htmlFor="surname" className="d-flex">Surname</label>
                  <input
                    // type="text"
                    className="form-control"
                    // id="surname"
                    placeholder="Please Enter Surname"
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="parentName" className="d-flex">Parent Name</label>
                  <input
                    // type="text"
                    className="form-control"
                    // id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    placeholder='Please Enter Parent Name'
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="age" className="d-flex">Age</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Age"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="address" className="d-flex">Address</label>
                <input
                  placeholder="Address"
                  className="form-control"
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="phoneNumber" className="d-flex">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder='Phone Number'
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email" className="d-flex">Email</label>
                  <input
                    // type="email"
                    className="form-control"
                    // id="email"
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}


                  />
                </div>
              </div><br></br>
              <h5 className='d-flex'>Child Information :</h5><br />
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="birthDate" className="d-flex">Child Date Of Birth</label>
                  <input
                    // type="date"
                    className="form-control"
                    // id="dob"
                    placeholder="DD/MM/YYYY"
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="weight" className="d-flex">Child Weight</label>
                  <input
                    // type="number"
                    className="form-control"
                    // id="weight"
                    placeholder="Weight"
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="bloodgroup" className="d-flex">Blood Group</label>
                  <input
                    // type="text"
                    className="form-control"
                    // id="bloodgroup"
                    placeholder="Blood Group"
                    type="text"
                    id="bloodgroup"
                    name="bloodgroup"
                    value={formData.bloodgroup}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="time" className="d-flex" name="time">Time</label>
                  <input
                    // type="time"
                    className="form-control"
                    // id="time"
                    placeholder="Time of Birth"
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-7'></div>
                <div className='col-5 d-flex justify-content-end'>
                  <div className='row '>
                    <div className='col-6'>
                      <button type="submit" className="btn btn-primary d-flex">
                        Submit
                      </button>
                    </div>
                    <div className='col-6'>
                      <Link to="/wel">
                        <button className='btn btn-secondary d-flex'>Back</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* </form> */}

              {/* </div> */}

              {/* <button type="submit">Submit</button> */}
            </form>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Hospital;
