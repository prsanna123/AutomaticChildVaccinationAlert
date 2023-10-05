// import React,{useEffect,useContext} from 'react';
// import messageContext from '../context/messageContext';
// import Chil from './child';
// const Automate =() =>{
//   console.log("hi")
//   const context=useContext(messageContext)
//   const {Ans}=context;
//   useEffect(() => {
//     Ans();
//     // eslint-disable-next-line
// }, [])
//     const handleSubmit=async (e) => {
//         e.preventDefault();
      
//     }
    
//   return (
//     <div>
//       <h1>hi</h1>
//         <form onSubmit={handleSubmit}>
//         <button type="submit">
//             submit
//         </button>
        
//         </form>
//         < div className='row my-3'>
         
          
          
//           {/* <div>
//           {
//             data.map((j)=>{
//               return <Chil info={j}/>
//             })
//           }
//           </div> */}
//           <h2>Children data</h2>
//         </div>

//     </div>
//   );
// };

// export default Automate;


import React,{useContext,useEffect,useState} from 'react'
// import noteContext from "../context/notes/noteContext"
import {Link} from "react-router-dom"

export default function Student(userData) {
    const [data,setData]=useState([]);
    useEffect(()=>{
      fetch("http://localhost:5000/api/child/getchilddata",{
        method:"GET",
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log("at 59")
        console.log(data);
        setData(data);
      });
    },[]);
    return (
      <div>
        <div className="container">
            <h1> Sending message to parent</h1>
              <div className="col-12">
                {/* {
                  data.map((data,i)=>
                  <li key={i}>{data}</li>)
                } */}
                
      {data.map(i=>{
        return(
          <div>
          <div className="row border">
          <div className="card">
       <i className="fa fa-user-o fa-10x mt-2" aria-hidden="true" ></i>
        <div className="card-body">
       
        <p className="card-text">{i._id}     {i.parent_name}    {i.phone_num}   {i.email}</p>
        
      </div>
    </div>
    </div>
    
    </div>
        )
      })}
      
      </div>
    </div>
    <Link to="/wel">
        <button className='btn btn-secondary'>back</button>
      </Link>
    </div>
  )
}