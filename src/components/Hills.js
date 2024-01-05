import React, { useEffect, useState } from "react";
import './Hills.css';
 const Hills=()=>{
   const[news,setNews]=useState('');
   useEffect(()=>{
      const fetchNews=async()=>{
         const api=await fetch('https://newsapi.org/v2/everything?q=Apple&from=2024-01-04&sortBy=popularity&apiKey=731ecc4498a14b208de769708b7c450a')
         const data=await api.json();
         setNews(data)
         console.log(data);
      }
   },[])
  
    const date=new Date().toLocaleDateString();
    const time=new Date().toLocaleTimeString();
    return(
       <div style={{backgroundColor:'white',borderRadius:'19px',height:'100%'}}>
            <p className="hill" style={{height:'50%',width:'100%',marginTop:'0px'}}>
               <p style={{marginLeft:'10px',marginRight:'10px',padding:'8px',backgroundColor:'white',backgroundColor: "#000",color:'#c4cdd1',
  opacity: '.5'
}}>Want To Climb Mount Evrest? {date} {time}</p> 
            </p>
             <p style={{marginLeft:'5px',overflowY:'auto',backgroundColor:'white',borderRadius:'12px',height:'43%'}}>In the years since human being  first reached the summit of Mount Everest in 1953, climbing the world’s highest mountain has changed  dramatically. Today, hundreds of mountaineers manage the feat each year thanks to improvements in knowledge, technology, and the significant infrastructure provided by commercially guided expeditions that provide a veritable highway up the mountain for those willing to accept both the Everest in 1953, climbing the world’s highest mountain has changed  dramatically. Today, hundreds of mountaineers manage the feat each year thanks to improvements in knowledge, technology, and the significant infrastructure provided by commercially guided expeditions that provide a veritable highway up the mountain for those willing to accept both the 
             </p>
       </div>
    )
 }
 export default Hills;