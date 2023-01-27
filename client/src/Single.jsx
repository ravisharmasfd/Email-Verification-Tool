import React, { useRef } from 'react'
import { useState } from 'react';
import Result from './Result';

export default function Single() {
  const email = useRef();
  const [emails , setEmails] = useState([])
  const handleInput= async()=>{
      const res = await fetch(`http://localhost:8080/api/v1/check/${email.current.value}`);
      const {data} = await res.json();
      console.log(data);
      setEmails([{email :email.current.value,info:data}]);
  }
  return (
        <div className='container'>
        <h1>Enter Email to Check</h1>
        <div className='inputContainer'>
        <input ref={email} type="text" className='input' placeholder='example@example.com' />
        <button className='svg' onClick={handleInput}> <svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M238.368,451.888c-124.24,0-225.312-101.072-225.312-225.344S114.128,1.184,238.368,1.184 c124.272,0,225.344,101.072,225.344,225.344S362.64,451.888,238.368,451.888z M238.368,25.984c-110.56,0-200.528,90-200.528,200.56 s89.952,200.56,200.528,200.56s200.56-90,200.56-200.56S348.928,25.984,238.368,25.984z"></path> <polygon points="472.448,512 369.056,408.576 389.136,393.616 489.968,494.48 "></polygon> <polygon style={{fill: "#A61F69"}} points="248.032,315.52 113.168,172.72 152.384,135.664 246.928,235.76 458.672,0 498.944,35.952 "></polygon></g></svg>
        </button>
        </div>
        {emails.length > 0 && <Result emails={emails} />}
        </div>
  )
}
