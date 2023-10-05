
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
<div>
  <h1 className='align:center'>Child Vaccination Remainder System</h1><br></br><br></br>
    <div className="row mx-md-n5">
  <div className="col px-md-5"><div className="p-3 border bg-light"> <Link to="/childdata">
        <button className='btn btn-success'>Add Child Data</button>
      </Link></div></div>
  <div className="col px-md-5"><div className="p-3 border bg-light"> <Link to="/message">
        <button className='btn btn-warning'>Send Message</button>
      </Link></div></div>
</div>
    </div>
  );
};

export default WelcomePage;
