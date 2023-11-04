
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
<div>
  <h1 className='align:center'>Child Vaccination Remainder System</h1><br></br><br></br>

 
    <div className="row mx-md-n5 custom">
      {/* <div className="col px-md-5"> */}
          <div className="card cust w-30 px-5 ml-6 mr-5 border bg-light">
          <img className="card-img-top" src="https://imgs.search.brave.com/X5Wgrt6JCnMNXBtTELO-C11U6b_RAkwTLP0Pxac_nQE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXBsdXMtMTQzOTcz/MS0xMjE0MzAzLnBu/Zz9mPXdlYnAmdz0x/Mjg" alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text">Add the child's details</p>
            <Link to="/childdata">
                <button className='btn btn-success'>Add Details</button>
              </Link>
          </div>
          </div>
      {/* </div> */}
      {/* <div className="col px-md-5"> */}
        <div className="card cust w-30 ml-5 px-md-5  mr-5 border bg-light">
          <img className="card-img-top" src="https://imgs.search.brave.com/fd-orxy1dY0gB2qFIWrTo1iKjjM_y7sBMb1yhoRE8fw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMjk4My8yOTgz/Nzg4LnBuZw" alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text">Send the vaccination alerts</p>
            <Link to="/message">
        <button className='btn btn-warning'>Send Message</button>
      </Link>
          </div>
        </div>
      {/* </div> */}

  {/* <div className="col px-md-5">
    <div className="p-3 border bg-light"> 
      <Link to="/childdata">
        <button className='btn btn-success'>Add Child Data</button>
      </Link>
    </div>
  </div> */}
  {/* <div className="col px-md-5">
  <div className="p-3 border bg-light"> 
      <Link to="/message">
        <button className='btn btn-warning'>Send Message</button>
      </Link></div></div>
*/}
</div>
    </div>
    
  );
};

export default WelcomePage;