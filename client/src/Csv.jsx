import React from 'react'
import { useState } from 'react'
import Result from './Result'

export default function Csv() {
  const [myfile,setFile] = useState(null);
  const [emails,setEmails] = useState([])
  const handleCsv = async(e)=>{
    e.preventDefault();
    const postData = new FormData();
    if(!myfile){
        return;
    }
    postData.append("csvFile", myfile);
    try {
        const res = await fetch(`http://localhost:8080/api/v1/csv`,{
          method:"POST",
          body:postData,
        })
        const {data} = await res.json();
        console.log(data);
        if(!data) alert("Check you Csv File contain email field")
        setEmails(data);
    } catch (error) {
        alert("there is some error ")
    }
}
  return (
    <div className='container'>
      <h1>Upload Csv file which Contain email field</h1>
      <form onSubmit={handleCsv} >
        <div className=' focus-within:border-solid focus-within:border-white focus-within:border-2 flex flex-row justify-start  mt-4  bg-third rounded-3xl w-4/5' >
            
        </div>
        <input id='uFile' required onChange={(e)=>{setFile(e.target.files[0])}} multiple={false}accept=".csv"  type="file"></input>
        <input type='submit' ></input>
 
    </form>
    {emails.length > 0 && <Result emails={emails} />}
    </div>
  )
}
