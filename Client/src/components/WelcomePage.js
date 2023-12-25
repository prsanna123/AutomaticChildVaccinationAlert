
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
<div>
  <h3 className='align:center'>Child Vaccination Remainder System</h3><br></br><br></br>

 
    <div className="row"> 
    <div className='col-lg col-sm-12'>
          <div className="card cust  border bg-light">
          <img className="card-img-top" src="https://imgs.search.brave.com/X5Wgrt6JCnMNXBtTELO-C11U6b_RAkwTLP0Pxac_nQE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXBsdXMtMTQzOTcz/MS0xMjE0MzAzLnBu/Zz9mPXdlYnAmdz0x/Mjg" alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text bg-primary">Add the child's details</p>
            <Link to="/childdata" className='bg-secondary'>
                <button className='btn btn-danger'>Add Details</button>
              </Link>
          </div>
          </div>
          </div>
          <div className='col-lg col-sm-12'>
        <div className="card cust border bg-light">
          <img className="card-img-top" src="https://imgs.search.brave.com/fd-orxy1dY0gB2qFIWrTo1iKjjM_y7sBMb1yhoRE8fw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMjk4My8yOTgz/Nzg4LnBuZw" alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text">Send the vaccination alerts</p>
            <Link to="/message">
        <button className='btn btn-warning'>Send Messages</button>
      </Link>
          </div>
        </div>
        </div>
</div>
    </div>
    
  );
};

export default WelcomePage;