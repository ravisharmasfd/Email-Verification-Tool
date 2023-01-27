import React from 'react'

function Result({emails}) {
  return (
    <table>
  <thead>
    <tr className="thead">
      <th scope="col">Email</th>
      <th scope="col">Valid Domain</th>
      <th scope="col">Valid Mailbox</th>
      <th scope="col">Well formed</th>
    </tr>
  </thead>
  <tbody>
    {emails.map(e=>{
     return <tr>
     <td data-label="Email">{e.email}</td>
     <td data-label="Valid Domain">{e.info.validDomain ? "Valid" : "Not Valid"}</td>
     <td data-label="Valid Mailbox">{e.info.validMailbox ? "Valid" : "Not Valid"}</td>
     <td data-label="Well formed">{e.info.wellFormed ? "Valid" : "Not Valid"}</td>
   </tr>   
    })}
  </tbody>
</table>
  )
}

export default Result