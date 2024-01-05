// import React from "react";
// import man from '../assets/image 14.png'; 
// import { useNavigate} from "react-router-dom";
// const Movies=()=>{
//         const navigate=useNavigate();
//         const handleChange=()=>{
//        navigate('/register')
//         }
//     return(
//         <div style={{width:'100vw',height:'100vh',backgroundColor:'black',padding:'10px 30px 10px 30px'}}>
//             <div style={{width:'95vw',height:'10vh',border:'2px solid red',display:'flex',justifyContent:'space-between'}}>
//                 <div>
//                <p style={{color:'greenyellow',fontFamily:'cursive',marginTop:'0px',marginBottom:'0px'}}>Supper app</p>
//                <h3 style={{color:'white',marginLeft:'20px'}}>Entertainment according to your choice</h3>
//                </div>
//                <div>
//                 <img onClick={handleChange} style={{width:'49px'}} src={man}/>
//                </div>
//             </div>
//             <div>
                 
//             </div>

//         </div>
//     )
// }
// export default Movies;



import { useEffect, useState } from "react";  
// import styles from "./List.module.css";
const List = ({ genre }) => {
  const [movies, setMovies] = useState([]);
//   console.log(movies);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    const fetchMovies = async () => {
      await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`,
        options
      )
        .then((response) => response.json())
        .then((response) => setMovies(response.results.splice(4, 4)))
        // console.log(setMovies)
        .catch((err) => console.error(err));
    };
    fetchMovies();
  }, []);
  return (
    <>
      <p  style={{ overflowY: "hidden" }}>
        {genre}
      </p>
      <div style={{ display: "flex", overflow: "hidden", marginLeft: "2vw" }}>
        {movies.map((movie, idx) => {
          return (
            <div key={idx} style={{ width: "20vw", margin: "2vw" }}>
              <img
                src={movie?.primaryImage?.url}
                style={{
                  objectFit: "cover",
                  width: "20vw",
                  height: "15vh",
                  borderRadius: "12px",
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;