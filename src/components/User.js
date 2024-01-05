import React from "react";
import man from '../assets/image 14.png';
import Chip from "./Chip";
 const User=()=>{
   // const name=window.localStorage.getItem('user',userData.name)
   const info=JSON.parse(window.localStorage.getItem('userData'));
   const genre=JSON.parse(window.localStorage.getItem('genres'));
    return(
        <div style={{backgroundColor:"#5353cd",borderRadius:'12px',display:'flex',height:'100%'}}>
           <img style={{height:"90%",margin:'10px 0px 10px 5px'}} src={man}/>
           <div style={{height:'10%', margin:'20px 0px 0px 5px',width:'60%'}}>
           <p style={{backgroundColor:'#5353cd',fontWeight:'600',color:'white',marginTop:'0px',marginBottom:'0px'}}>{info.name}</p>
           <p style={{fontSize:'18px',backgroundColor:'#5353cd',color:'white',marginTop:'0px',marginBottom:'0px'}}>{info.mail}</p>
           <p style={{backgroundColor:'#5353cd',fontWeight:'700',color:'white',marginTop:'0px',marginBottom:'5px',fontFamily:'sans-serif'}}>{info.username}</p>
           {/* <div style={{width:'245px',height:'43px',borderRadius:'0px 0px 12px 0px'}}> */}
           <Chip  categories={genre} color={'#9F94FF'} />
           {/* </div> */}
           </div>
        </div>
    )
 }
 export default User;