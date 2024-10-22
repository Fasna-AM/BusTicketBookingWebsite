import React, { useEffect, useState } from 'react'
import payment from '../assets/busimg2.avif'
import { Link } from 'react-router-dom'
import { addTicketAPI, getBusDetailsAPI, getSingleUserAPI, updateUserDetailAPI } from '../services/allAPI'

const Payment = () => {

    const [paymentMethod, sePaymentMethod] = useState("")
    const [isPayment, setIsPayment] = useState(false)
    const [userDetails, SetUserDetails] = useState({})
    const [busDetails, SetBusDetails] = useState({})

    const [numberOfSeats, setNumberOfSeats] = useState("")
    const [ticketDetails, setTicketDetails] = useState({
        name: "",
        source: "",
        destination: "",
        seats: "",
        fare: "",
        totalFare: "",
        date: "",
        time: "",
        bookedDate: ""
    })


    useEffect(() => {
        if (sessionStorage.getItem("id")) {
            const id = sessionStorage.getItem("id")
            const busId = sessionStorage.getItem("busId")
            setNumberOfSeats(sessionStorage.getItem("numberOfSeats"))
            // console.log(id);
            getuserDetails(id, busId)
        }
    }, [])

    const getuserDetails = async (id, busId) => {
        try {
            const userResponse = await getSingleUserAPI(id)
            // console.log(userResponse.data);
            const userServerResponse = userResponse.data
            SetUserDetails(userServerResponse)

            const busResponce = await getBusDetailsAPI(busId)
            const busServerResponse = busResponce.data
            // console.log(busServerResponse);
            SetBusDetails(busServerResponse)

        } catch (err) {
            console.log(err);

        }

    }

    const mystyle = {
        backgroundImage: `url(${payment})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        // backgroundPosition: "center"

    }
    // console.log(paymentMethod);
    const bookedDate = new Date().toDateString()
    // console.log(date);
    const totalFare = numberOfSeats * busDetails.fare

    const addTicket =  () => {
        
            setTicketDetails({
                ...ticketDetails,
                name: busDetails.name,
                source: busDetails.source,
                destination: busDetails.destination,
                seats: numberOfSeats,
                fare: busDetails.fare,
                totalFare: totalFare,
                date: busDetails.date,
                time: busDetails.time,
                bookedDate: bookedDate
            })
        
    }

    const handlePayment = async() => {
        if (paymentMethod) {
        try {
            const response = await addTicketAPI(ticketDetails)
            console.log(response.data.id);
             const serverResponse = response.data
             userDetails.tickets.push(serverResponse)

        } catch (err) {
            console.log(err);
        }
        setIsPayment(true)
        // userDetails.tickets.push(serverResponse)
        console.log(userDetails);
        await updateUserDetailAPI(userDetails.id,userDetails)
        
        
    } else {
        alert("Please Select Payment Method!!!!")
    }
    }

    return (
        <div style={mystyle} >

            {
                isPayment ?
                    <div className='w-100 d-flex   align-items-center ' style={{ backgroundColor: "rgba(254, 251, 209, 0.838)", height: "70px" }}>
                        <span className='text-success fw-bolder me-2 ms-3'>Ticket Booked Successfully </span>You Payment successfully completed..!!!   you will receive Confirmation Email

                        <Link to={'/viewTicket'} className='ms-5 ps-5 fw-bolder' >View Ticket</Link>
                    </div>
                    :
                    <div className='d-flex pt-5 justify-content-center align-items-center '>
                        <div className="rounded border  px-2 mt-3" style={{ backgroundColor: 'rgb(255,255,255,0.8', width: "400px" }}>
                            <h1 className="fw-bolder mt-3 mb-3 text-center">Payment</h1>
                            <p className=''>Please Confirm your Booking</p>
                            <p className=' fw-bolder'>Name : <span className='fw-lighter'>{userDetails.name}</span></p>
                            <p className=' fw-bolder'>Email : <span className='fw-lighter'>{userDetails.email}</span></p>
                            <p className=' fw-bolder'>Phone : <span className='fw-lighter'>{userDetails.phone}</span></p>
                            <p className=' fw-bolder'>Seats : <span className='fw-lighter'>{numberOfSeats}</span></p>
                            <p className=' fw-bolder'>Bus : <span className='fw-lighter'>{busDetails.name}</span></p>
                            <p className=' fw-bolder'>Fair per seats : <span className='fw-lighter'>{busDetails.fare}</span></p>
                            <p className=' fw-bolder'>Total Fair : <span className='fw-lighter'>{totalFare}</span></p>
                            <p className=' fw-bolder'>Payment Method : </p>
                            <select className="form-select mb-4" aria-label="Default select example" onChange={e => sePaymentMethod(e.target.value)} onClick={addTicket}>
                                <option selected></option>
                                <option value="Gpay"  >Gpay</option>
                                <option value="Phone Pay">Phone Pay</option>
                                <option value="Net Banking">Net Banking</option>
                            </select>
                            <button onClick={handlePayment} className='btn bg-success text-white fw-bolder border-black w-100 mb-4'>Pay Now</button>
                        </div>
                    </div>}


        </div>
    )
}

export default Payment