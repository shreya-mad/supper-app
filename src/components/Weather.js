import React, { useState,useEffect } from "react";
import pressure from '../assets/Vector (4).png';
import speed from '../assets/Vector (3).png';
import drp from '../assets/Group.png';
 const Weather=()=>{
    const date=new Date().toLocaleDateString();
    const time=new Date().toLocaleTimeString();
    const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

    useEffect(() => {
      fetchWeather();
    }, []);

    const fetchWeather = async () => {
      const url='http://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=bahraich';
      const response=await fetch(url);
      const resJon=await response.json();
      // console.log(resJon);
      setWeather(resJon);
   };

   console.log(weather)

    return weather === null ? 'Loading weather' :(
      <>
 
        <div style={{borderRadius:'12px',height:'100%'}}>
         <div style={{display:'flex' ,backgroundColor:'#d74d65',borderRadius:'12px 12px 0px 0px',justifyContent:'space-evenly',alignItems:'center',color:'white',fontWeight:'500',fontSize:'20px',height:'30%'}}>
           <p style={{backgroundColor:'#d74d65'}}>{date}</p>
           <p style={{backgroundColor:'#d74d65'}}>{time}</p>
         </div>
         <div style={{display:'flex',justifyContent:'space-evenly',backgroundColor:'#1a1a45',borderRadius:'0px 0px 12px 12px',height:'70%'}}>
                <div style={{color:'white',textAlign:'center',backgroundColor:'#1a1a45',borderRight:'2px solid white',width:'30%'}}>
                  <img
                   src={weather.current.condition.icon} style={{backgroundColor:'#1a1a45', width: "50px",marginBottom:'0px',color:'white', height: "30px" }}/> 
                  <p style={{marginTop:'0px',fontSize:'12px',backgroundColor:'#1a1a45'}}>{weather.current.condition.text}</p>
                </div>
                <div style={{color:'white',textAlign:'center',borderRight:'2px solid white',fontSize:'11px',width:'30%'}}>
                     <span style={{backgroundColor:'#1a1a45',fontSize:'17px'}}>{weather.current.temp_c}</span><span style={{fontSize:'18px'}}>  C</span>
                     <p style={{display:'flex',backgroundColor:'#1a1a45',justifyContent:'space-around'}}>
                       <img style={{height:'15px',marginLeft:'5px'}} src={pressure}/>
                       <p style={{marginBottom:'0px',backgroundColor:'#1a1a45',marginTop:'0px'}}>{weather.current.condition.code}</p><span style={{backgroundColor:'#1a1a45',marginRight:'3px'}}>mbar Pressure</span>
                     </p>
                </div>
                <din style={{color:'white',display:'flex',flexDirection:'column',justifyContent:'space-evenly',backgroundColor:'#1a1a45',alignItems:'center',fontSize:'10px',width:'30%'}}>
                   <div><img style={{width:'15px',backgroundColor:'#1a1a45',marginRight:'3px'}} src={speed}/><span style={{backgroundColor:'#1a1a45'}}>{weather.current.wind_kph}km/h Wind</span></div>
                   <div><img style={{width:'11px',backgroundColor:'#1a1a45',marginRight:'3px'}} src={drp}/><span style={{backgroundColor:'#1a1a45'}}>{weather.current.humidity} humidity</span></div>
                </din>
         </div>
       </div>
   </>
)
 }

 export default Weather;