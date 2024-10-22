import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'

import viewbusimg from '../assets/viewbusimg.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { getAllBusAPI, getBusDetailsAPI } from '../services/allAPI'


const BusBooking = () => {



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    sessionStorage.setItem("busId",id)
    setShow(true);
  }

  const navigate = useNavigate()
  const [sourse, setSourse] = useState("")
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("")
  const [busDetails, setBusDetails] = useState([])
  const [isBusNotAvailable, setIsBusNotAvailable] = useState(true)
  const [numberOfSeats, setNumberOfSeats] = useState("")

  const mystyle = {
    backgroundImage: `url(${viewbusimg})`,
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center"

  }

  const handleSearch = async () => {
    if (sourse && destination && date) {
      try {

        const response = await getAllBusAPI()
        const serverResponse = response.data
        const bus = serverResponse?.filter(bus => bus.source == sourse && bus.destination == destination && bus.date == date)
        // console.log(bus);

        if (bus.length > 0) {
          setBusDetails(bus)
          console.log(isBusNotAvailable);
          setIsBusNotAvailable(true)


        } else {
          setIsBusNotAvailable(false)
        }


      } catch (err) {
        console.log(err);

      }

    } else {
      alert("Please mention source,destination,date !!!")
    }
  }

  const handleSeats = () => {
    // console.log(numberOfSeats);
    if (numberOfSeats) {

      sessionStorage.setItem("numberOfSeats",numberOfSeats)
      handleClose()
      navigate('/payment')
    } else {
      alert("Please enter number of seats !!!")
    }

  }

  return (
    <>
      <Header insideBooking={true}/>
      <div style={mystyle} className='d-flex flex-column justify-content-center align-items-center'>

        <h1 className="text-center fw-bolder" >Book Your Bus Ticket</h1>

        <div className="search py-5 px-5 rounded " style={{ backgroundColor: 'rgb(255,255,255,0.7' }}>
          <i className='fa-solid fa-location-dot ' /><input onChange={e => setSourse(e.target.value)} className='rounded' type="text" placeholder='Source' />
          <i className='fa-solid fa-location-dot ms-3' /><input onChange={e => setDestination(e.target.value)} className='rounded' type="text" placeholder='Destination' />
          <input onChange={e => setDate(e.target.value)} type="date" className='ms-3 rounded' />
          <button onClick={handleSearch} className='ms-3 bg-success rounded'><i className='fa-solid fa-search text-white   px-5' /></button>

        </div>
        {
          isBusNotAvailable ?
            <div className="busDetails mt-5 " >
              <h1 className="text-center text-black fw-bolder">Bus Details</h1>
              {
                busDetails?.length > 0 &&
                busDetails?.map((bus) => (
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div key={bus.id} className=" rounded border py-2 mt-3 row w-75" style={{ backgroundColor: 'rgb(255,255,255,0.7' }}>
                      <div className='col-lg-5'>
                        <h2 className='text-primary fw-bolder '>{bus.name}</h2>
                        <p className='fw-bolder fs-5'>Source : <span>{bus.source}</span></p>
                        <p className='fw-bolder fs-5'>Destination : <span>{bus.destination}</span></p>
                        <p className='fw-bolder fs-5'>Departure : <span>{bus.time} {bus.date}</span></p>
                      </div>
                      <div className="col-lg-2"></div>
                      <div className="col-lg-2"></div>
                      <div className='col-lg-3'>
                        <p className='text-primary fw-bolder fs-5'> ₹ {bus.fare}</p>
                        <p className='fw-bolder fs-5'>{bus.totalSeats} Total Seats</p>
                        <p className='fw-bolder fs-5'>{bus.seatsRemaining} Seats Left</p>
                        <button onClick={()=>handleShow(bus.id)} className=' btn bg-primary text-white  me-2 fw-bolder fs-5' >Book Ticket</button>

                      </div>
                      <p className='fw-bolder text-danger'>Note: <span> Cancellatoin made 24 hours prior to depature will receive a full refund</span></p>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Number of Seats</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <FloatingLabel controlId="floatingInputCaption" label="Number of seats" className="mb-3">
                            <Form.Control onChange={e => setNumberOfSeats(e.target.value)} type="text" placeholder="Number of seats" />
                          </FloatingLabel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button className='fw-bolder' variant="primary" onClick={handleSeats}>
                            Book Ticket
                          </Button>
                          
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
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

export default BusBooking