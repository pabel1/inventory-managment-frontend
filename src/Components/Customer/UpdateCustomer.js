import React from 'react'
import { useLocation } from 'react-router-dom'
import UpdateForm from '../CreateForm/UpdateForm'

const UpdateCustomer = () => {

    const location= useLocation()
    const {state}=location
    // console.log(state);
  return (
    <div>
      {
        state && (<UpdateForm state={state} />)
         
      }
      
    </div>
  )
}

export default UpdateCustomer