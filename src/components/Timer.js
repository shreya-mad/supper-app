import React,{useState}  from "react";
import up from '../assets/up.png';
import down from '../assets/down.png';
import './Timer.css'
import { CountdownCircleTimer } from "react-countdown-circle-timer";


const  Timer=()=>{
    const[hr,setHr]=useState(0);
    const[min,setMin]=useState(0);
    const[sec,setSec]=useState(0);
    const [playing, setPlaying] = useState(false);
    const increaseHr = () => {
        setHr((hr) => hr + 1);
      }; 
      const decreaseHr = () => {
        if (hr == 0) {
          return
        }
        setHr((hr) => hr - 1);
      };
      const increaseMin = () => {
        if (min == 59) {
          return;
        }
        setMin((min) => min + 1);
      };
      const decreaseMin = () => {
        if (min == 0) {
          return;
        }
        setMin((min) => min - 1);
      };
      const increaseSec = () => {
        if (sec == 59) {
          return;
        }
        setSec((sec) => sec + 1);
      };

      const decreaseSec = () => {
        if (sec == 0) {
          return;
        }
        setSec((sec) => sec - 1);
      };
    
      function toHoursAndMinutes(totalSeconds) {
        const totalMinutes = Math.floor(totalSeconds / 60);
    
        const seconds = totalSeconds % 60;
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
    
        return `${hours}:${minutes}:${seconds}`;
      }
    
    
    return (
        <>
        <div style={{display:'flex',justifyContent:'space-evenly',padding:'6px 15px 10px 20px'}}>
           <div style={{backgroundColor:'#1f1f63',borderRadius:'50%'}}> 
           <CountdownCircleTimer
          isPlaying={playing}
          duration={sec + min * 60 + hr * 60 * 60}
          colors={["#FF6A6A"]}
  
        >
          {({ remainingTime }) => (
            <span style={{ color: "white", fontSize: "1.5rem" }}>
              {toHoursAndMinutes(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
           </div>
           <div style={{height:'150px',width:'48%',color:'white'}}> 
             <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div >
                     <h3 style={{marginTop:'0px'}}>Hours</h3>
                     <img style={{width:'10px',marginLeft:'22px'}} className="upDown" onClick={increaseHr} src={up} />
                     <p style={{textAlign:'center',fontSize:'30px',margin:'0px'}}>{hr}</p>
                     <img style={{width:'10px',marginLeft:'22px'}} className="upDown" onClick={decreaseHr}  src={down} />
                </div>
                <div style={{fontSize:'40px'}}>:</div>
                <div>
                     <h3 style={{marginTop:'0px'}}>Minutes</h3>
                     <img style={{width:'10px',marginLeft:'29px',marginTop:'0px'}} onClick={increaseMin} className="upDown" src={up} />
                     <p style={{textAlign:'center',fontSize:'30px',margin:'0px'}}>{min}</p>
                     <img style={{width:'10px',marginLeft:'29px'}} onClick={decreaseMin} className="upDown"  src={down} />
                </div>
                <div style={{fontSize:'40px'}}>:</div>
                <div style={{}}>
                     <h3 style={{marginTop:'0px'}}>Seconds</h3>
                     <img style={{width:'10px',marginLeft:'29px'}} onClick={increaseSec} className="upDown" src={up} />
                     <p style={{textAlign:'center',fontSize:'30px',margin:'0px'}}>{sec}</p>
                     <img style={{width:'10px',marginLeft:'29px'}} onClick={decreaseSec} className="upDown"  src={down} />
                </div>
             </div>
             <div>
                <div  onClick={() => setPlaying((prev) => !prev)} style={{width:'100%',height:'23px',backgroundColor:'#e57575',color:'white',fontSize:'18px',borderRadius:'12px',border:'none'}}>
                  
                  {playing?<div className="st" style={{textAlign:'center'}}>Pause</div>:<div style={{textAlign:'center'}} className="st">Start</div>}
                  </div>
             </div>
           </div>
        </div>
        </>
    )
}
export default Timer;