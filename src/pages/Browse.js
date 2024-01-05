import React from "react";
import './Browse.css';
import User from '../components/User';
import Weather from '../components/Weather';
import Hills from '../components/Hills';
import { useNavigate} from "react-router-dom";
import Timer from "../components/Timer";
const Browse=()=>{
    const navigate=useNavigate();
    const handleClick=()=>{
   navigate('/movie')
    }
    return(
        <>
        {/* <div style={{backgroundColor:'black',width:"100vw",height:'100vh',display:'flex',justifyContent:'space-evenly'}}>
        <div style={{height:'84vh',border:'2px solid green',marginTop:'4vh'}}>
            <div style={{display:'flex'}}>
                <div style={{width:'28vw',border:'2px solid yellow',borderRadius:'12px',marginTop:'4vh', height:'60%'}}>
                    <div style={{margin:"0px 0px 4vh 0px",height:'65%',border:'2px solid white'}}>
                      <User/>
                    </div>
                    <div style={{height:'28vh',border:'2px solid green',marginBottom:'0px'}}>
                       <Weather/>   
                    </div>
                </div>
                <div style={{width:'50%',border:'2px solid white'}}>

                </div>
            </div>
            <div style={{width:'55vw',border:'2px solid red',height:'25vh',marginBottom:'0px'}}>

            </div>
        </div>
        <div  style={{width:'35vw',height:'84vh' ,border:'2px solid red',marginTop:'4vh',borderRadius:'12px'}}>
                <Hills/>
        </div>
        </div>
        <button
        style={{
          position: "absolute",
          bottom: "5vh",
          right: "4vw",
          background: "green",
          border: "none",
          color: "white",
          fontSize:'20px',
          borderRadius: "12px",
          width:'100px',
          height:'30px'
        }}
        onClick={handleClick}
        >next</button> */}
      <div style={{marginTop:'0px',backgroundColor:'black',width:'100vw',height:'100vh',paddingTop:'5vh'}}>
        <div style={{display:'flex',backgroundColor:'black',height:"85vh",margin:'0vh 5vw 3vh 5vw',borderRadius:'12px'}}>
            <div style={{width:'65%',height:'100%',borderRadius:'12px'}}>
               <div style={{height:'55%',width:'100%',borderRadius:'12px',display:'flex',justifyContent:'space-between'}}>
                  <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'50%',height:'100%',borderRadius:'12px'}}>
                     <div style={{height:'55%',width:'100%',borderRadius:'12px'}}>
                        <User/>
                     </div>
                     <div style={{height:'35%',width:'100%',borderRadius:'12px'}}>
                       <Weather/>
                     </div> 
                  </div>
                  <div style={{width:'47%',backgroundColor:'#e2b249',height:'100%',borderRadius:'12px'}}>
                   <h2 style={{backgroundColor:'#e2b249',textAlign:'center'}}>All notes</h2>
                   <textarea className="textarea" placeholder="enter full deatails of how to start MERN stck">
                    </textarea>
                  </div>
               </div>
               <div style={{height:'40%',backgroundColor:'#303086',width:'100%',marginTop:'28px',borderRadius:'19px'}}>
                  
                      <Timer/>
                  
               </div>
            </div>
            <div style={{width:'30%',height:'100%',borderRadius:'12px',marginLeft:'5vw'}}>
            <Hills/>
            </div>
        </div>
        <div>
        <button
        style={{
          position: "absolute",
          bottom: "3vh",
          right: "5vw",
          background: "green",
          border: "none",
          color: "white",
          fontSize:'20px',
          borderRadius: "12px",
          width:'100px',
          height:'30px'
        }}
        onClick={handleClick}
        >Browse</button>
        </div>
    </div>
    </>
    )
}
export default Browse;