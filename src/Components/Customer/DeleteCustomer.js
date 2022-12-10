import React from 'react'
import { useNavigate } from 'react-router-dom'

const DeleteCustomer = () => {
  const navigate=useNavigate()
  return (
    <div>
      <button onClick={()=>navigate("customers/")}>Back to list</button>
    </div>
  )
}

export default DeleteCustomer