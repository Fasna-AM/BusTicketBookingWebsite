import React, { useState, useEffect } from 'react'
import busticket from '../assets/busticket.webp'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { cancelUserTicketAPI, getSingleUserAPI,updateUserDetailAPI } from '../services/allAPI'

const ViewTicket = () => {

    const [allTickets, setAllTickets] = useState([])
    const userId = sessionStorage.getItem("id")
    const [userName, setUseName] = useState("")
    const [phone, setPhone] = useState("")
    const [userDetails, SetUserDetails] = useState({})


    // const busId = sessionStorage.getItem("busId")

    useEffect(() => {

        getAllTickets(userId)

    }, [])

    const getAllTickets = async (userId) => {
        const response = await getSingleUserAPI(userId)
        // console.log(response.data);
        const serverResponse = response.data
        SetUserDetails(serverResponse)
        setUseName(serverResponse.name)
        setPhone(serverResponse.phone)
        setAllTickets(serverResponse.tickets)

    }

    const handleCancelTicket = async (ticketId) => {
        const cancelTicket = allTickets.find(ticket => ticket.id == ticketId)
        // console.log((cancelTicket));
        allTickets.splice(cancelTicket, 1)
        // console.log(allTickets);
        
       try{
        await updateUserDetailAPI(userId,userDetails)
        await cancelUserTicketAPI(ticketId)
        getAllTickets()
       }catch(err){
        console.log(err);
       }
       alert("Ticket cancelled successfully.... Refund will be processed within 7-10 business days!!! ")
    }


    return (

        <>
            <Header insideTicket={true}/>

            <div className='row d-flex justify-content-center align-items-center' style={{ minHeight: "100vh", backgroundColor: "rgba(254, 251, 209, 0.838)" }} >

                <div className="col-lg-5" >
                    <img className='img-fluid' src={busticket} width={"500px"} alt="" />
                </div>
                <div className="col-lg-7 mt-3 d-flex  justify-content-center align-items-center">

                    {
                        allTickets?.length > 0 ?
                            allTickets?.map((ticket, index) => (
                                <div key={index} className='border rounded bg-white m-2' style={{ width: "400px" }} >
                                    <h3 className="w-100 fw-bolder bg-primary text-white text-center">{ticket.name}</h3>
                                    <div className=" ms-2 d-flex ">
                                        <p className="fw-bolder">Source : <span className='fw-lighter'>{ticket.source}</span> </p>
                                        <p className="fw-bolder ms-4">Destination : <span className='fw-lighter'>{ticket.destination}</span> </p>
                                    </div>
                                    <div className="ms-2 d-flex ">
                                        <p className="fw-bolder">Date : <span className='fw-lighter'>{ticket.date}</span> </p>
                                        <p className="fw-bolder ms-4">Time : <span className='fw-lighter'>{ticket.time}</span> </p>
                                    </div>
                                    <p className="ms-2 fw-bolder">Fare : <span className='fw-lighter'>{ticket.fare}</span> </p>
                                    <p className="ms-2 fw-bolder">Seats : <span className='fw-lighter'>{ticket.seats}</span> </p>
                                    <p className="ms-2 fw-bolder">Ticket Booked On : <span className='fw-lighter'>{ticket.bookedDate}</span> </p>
                                    <hr />
                                    <p className="ms-2 fw-bolder">Name : <span className='fw-lighter'>{userName}</span> </p>
                                    <p className="ms-2 fw-bolder">Phone : <span className='fw-lighter'>{phone}</span> </p>

                                    <button onClick={() => handleCancelTicket(ticket.id)} className='btn bg-danger mb-3 ms-5 text-white'>Cancel Ticket</button>

                                </div>
                            ))

                            :
                            <div className="fw-bolder fs-3" style={{}}>
                                No Tickers are Booking Yet !!!!
                                <br />
                                <Link className='btn bg-primary text-white ms-5 mt-5 fw-bolder' to={'/Booking'}> Book Your Tickets Now</Link>

                            </div>
                    }

                </div>

            </div>
        </>
    )
}

export default ViewTicket