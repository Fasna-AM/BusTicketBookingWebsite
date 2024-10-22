import React, { useEffect, useState } from 'react'
import viewbusimg from '../assets/viewbusimg.jpeg'
import { getAllBusAPI } from '../services/allAPI'
import Header from '../components/Header'

const ViewBus = () => {

  const [busDetails,setBusDetails] = useState({})
  const [isBusAvailable,setIsBusAvailable] = useState(true)

  useEffect(()=>{
    getAllBuses()
  },[])

  const getAllBuses = async()=>{
    try{

      const response = await getAllBusAPI()
      const serverResponse =response.data
      // console.log(serverResponse);
      if(serverResponse.length>0){
        setIsBusAvailable(true)
        setBusDetails(serverResponse)
      }else{
        setIsBusAvailable(false)

      }      

    }catch(err){
      console.log(err);
      
    }
  }


  

  const mystyle = {
    backgroundImage: `url(${viewbusimg})`,
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center"

  }


  return (

    <>
          <Header/>
          <div style={mystyle}>
      {
          isBusAvailable ?
            <div className="busDetails pt-2 d-flex flex-column justify-content-center align-items-center " >
              <h1 className="text-center text-black fw-bolder">Bus Details</h1>
              {
                busDetails?.length > 0 &&
                busDetails?.map((bus) => (
                  <>
                    <div key={bus.id} className="rounded border py-2 mt-3 row w-50" style={{ backgroundColor: 'rgb(255,255,255,0.7' }}>
                      <div className='col-lg-6'>
                        <h2 className='text-primary fw-bolder '>{bus.name}</h2>
                        <p className='fw-bolder fs-5'>Source : <span>{bus.source}</span></p>
                        <p className='fw-bolder fs-5'>Destination : <span>{bus.destination}</span></p>
                        <p className='fw-bolder fs-5'>Departure : <span>{bus.time} {bus.date}</span></p>
                        <p></p>
                      </div>
                      <div className="col-lg-1"></div>
                      <div className="col-lg-2"></div>
                      <div className='col-lg-3'>
                        <p className='text-primary fw-bolder fs-5'> ₹ {bus.fare}</p>
                        <p className='fw-bolder fs-5'>{bus.totalSeats} Total Seats</p>
                        <p className='fw-bolder fs-5'>{bus.seatsRemaining} Seats Left</p>

                      </div>
                      
                    </div>
                  </>
                ))
              }

            </div>
            :
            <div style={{ backgroundColor: "rgba(254, 251, 209, 0.838)", height: "70px", width: "350px" }} className='d-flex justify-content-center align-items-center mt-5'>
              <p className='text-danger fw-bolder '>* Sorry there is no buses are available !!! </p>
            </div>
        }
    </div>

    </>
    
  )
}

export default ViewBus