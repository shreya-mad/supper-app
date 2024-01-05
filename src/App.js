import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import Genre from './pages/Genre';
import Error from './Error';
import Browse from './pages/Browse'
import Regis from './components/Regis';
import List from './pages/List';

function App() {
  return (
    <div>
    <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Regis/>}/>
      <Route  path="/register" element={<RegisterPage/>}/> 
      <Route path="/genre" element={<Genre/>}/>
      <Route path='/browse' element={<Browse/>}/>
      <Route path='/list' element={<List/>} />
      <Route path='*' element={<Error />}/>
     </Routes>
    </BrowserRouter> 
    </div>
  )
  }
export default App;
