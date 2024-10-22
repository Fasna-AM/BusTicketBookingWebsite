import React, { useState } from 'react'
import Header from '../components/Header'
import AddBus from '../components/AddBus'
import BusDetails from '../components/BusDetails'

const AdminPage = () => {
  const [addBusResponse,setAddBusResponse] =useState("")
  return (
    <>
    <Header/>
    <div className='d-flex row justify-content-center align-items-center ms-3 my-5' style={{minHeight:"100vh"}}>
      <div className="col-lg-3 border border-5 ">
      <AddBus setAddBusResponse={setAddBusResponse}/>
      </div>
      <div className="col-lg-9">
      <BusDetails addBusResponse={addBusResponse}/>
      </div>
    </div>
        
    </>
  )
}

export default AdminPage