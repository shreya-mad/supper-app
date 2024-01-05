import { Navigate, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import React, { useState } from "react";
const LoginForm=()=>{
  const [formValue,setFormValue]=useState({
    check: false,
    name:"",
    username:"",
    mail:"",
    mobile:""
  });
  const[nameError,setNameError]=useState(false);
  const[userNameError,setUserNameError]=useState(false);
  const[mailError,setMailError]=useState(false);
  const[mobileError,setMobileError]=useState(false);
  const[signUpError,setsignUpError]=useState(false);
  const Navigate=useNavigate()

  const handleChange=(e)=>{
    setFormValue({...formValue,[e.target.name]:e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    let valid=true;
    if(!(formValue.name.trim().length>0)){
      setNameError(true);
      valid=false;
    }
    else{
      setNameError(false);
    }

    if(!(formValue.username.trim().length>0)){
      setUserNameError(true);
      valid=false;
    }
    else{
      setUserNameError(false);
    }

    if(!(formValue.mail.trim().length>0)){
      setMailError(true);
      valid=false;
    }
    else{
      setMailError(false);
    }

    if(!(formValue.mobile.trim().length>0)){
      setMobileError(true);
      valid=false;
    }
    else{
      setMobileError(false);
    }
    if(!formValue.check){
      setsignUpError(true);
      valid=false;
    }
    else{
      setsignUpError(false);
    }
    if(valid){
      window.localStorage.setItem("userData",JSON.stringify(formValue));
      Navigate('/genre');
    }
  }
    return(
        <div className='body'>
      <div className='regist'>
        <h1 id='head'>super app</h1>
        <p id='create'>Create your new account</p>
        <form>
          <input type='text'
          onChange={(e)=>handleChange(e)} 
          name='name'
          placeholder='Name'/>
          {nameError?(<span className='nameError'>Field is required</span>):(<></>)}

          <input type='text' 
          onChange={(e)=>handleChange(e)} 
          name='username' 
          placeholder='UserName'/>
          {userNameError?(<span className='nameError'>Field is required</span>):(<></>)}

          <input type='Email' 
          onChange={(e)=>handleChange(e)} 
          name='mail' 
          placeholder='Email'/>
          {mailError?(<span className='nameError'>Field is required</span>):(<></>)}

          <input type='tel' 
          onChange={(e)=>handleChange(e)}
          name='mobile'  
          placeholder='mobile no.'/>
          {mobileError?(<span className='nameError'>Field is required</span>):(<></>)}

          <div className='check'>
            <input type='checkbox'
            name='check'
            onClick={(e)=>setFormValue({...formValue,[e.target.name]:e.target.checked})}
            />
            <p>share my registration with superapp</p>
          </div>
          {signUpError?(<span className='nameError'>Check this box if you want to proceed</span>):(<></>)}
          <button className='sign' onClick={(e)=>handleSubmit(e)}>SIGN UP</button>
          <p>By clicking on sign up. you agree to superapp <span className='green'>Term and Conditions of Use</span></p><p>To learn about how Superapp collects uses,shares and protects your personal  data please head Superapp <span className='green'>Privacy Policy</span></p>
          </form>
      </div>
    </div>
    )
} 
export default LoginForm;