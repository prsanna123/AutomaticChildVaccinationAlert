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
import Card from './Card';
const host='http://localhost:5000'
// const host='https://automatic-child-vaccination-alert-35ol.vercel.app'
export default function Student(userData) {
    const [data,setData]=useState([]);
    useEffect(()=>{
      fetch(`${host}/api/child/getchilddata`,{
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
            <h3>  Parents Of Vaccination Alert Sent</h3>
              <div className="col-12">
                
      
        
          <div>
          <div className="card-container">
            {
              data.map((card,index)=>(
                <Card
                key={index}
                title={card.parent_name}
                description={card.phone_num}
                email={card.email}/>
              ))
            }
    </div>
    
    </div>
        
     
      
      </div>
    </div>
    <Link to="/wel">
        <button className='btn btn-secondary'>back</button>
      </Link>
    </div>
  )
}