import React from 'react'
import { Outlet } from 'react-router-dom'

const CustomerLayout = () => {
  return (
    <div>
      <h1> total customer : </h1>
      <Outlet></Outlet>
    </div>
    
  )
}

export default CustomerLayout