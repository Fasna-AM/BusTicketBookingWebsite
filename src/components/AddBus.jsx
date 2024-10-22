import React, { useState } from 'react'
import { addBusAPI } from '../services/allAPI'

const AddBus = ({setAddBusResponse}) => {

    const [busDetails, setBusDetails] = useState({
        name: "",
        source: "",
        destination: "",
        totalSeats: "",
        seatsRemaining: "",
        fare: "",
        date: "",
        time: ""
    })
    const handleAddBus = async () => {
        const { name, source, destination, totalSeats, seatsRemaining, fare, date, time } = busDetails
        // console.log(name,source,destination,totalSeats,seatsRemaining,fare,date,time);
        if (name && source && destination && totalSeats && seatsRemaining && fare && date && time) {
            try {
                const response = await addBusAPI(busDetails)
                // console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    setBusDetails({
                        ...busDetails,
                        name: "",
                        source: "",
                        destination: "",
                        totalSeats: "",
                        seatsRemaining: "",
                        fare: "",
                        date: "",
                        time: ""
                    })
                    setAddBusResponse(response.data)
                    alert("Bus Registration successfully completed !!!")
                }


            } catch (err) {
                console.log(err);

            }

        } else {
            alert("Please fill the form completely !!!!")
        }


    }

    return (
        <div >
            <h3 className="fw-bolder text-center text-success justify-content-center align-items-center mt-4">Add Bus Details Here</h3>
            <div className="ms-3 mt-4 d-flex flex-column justify-content-center ">
                <label htmlFor="" className='fw-bolder'>Name: </label>
                <input onChange={e => setBusDetails({ ...busDetails, name: e.target.value })} type="text" className='w-75' />
                <br />
                <label htmlFor="" className='fw-bolder'>Source: </label>
                <input onChange={e => setBusDetails({ ...busDetails, source: e.target.value })} type="text" className='w-75' />
                <br />

                <label htmlFor="" className='fw-bolder'>Destination: </label>
                <input onChange={e => setBusDetails({ ...busDetails, destination: e.target.value })} type="text" className='w-75' />
                <br />

                <label htmlFor="" className='fw-bolder'>Total Seats: </label>
                <input onChange={e => setBusDetails({ ...busDetails, totalSeats: e.target.value })} type="text" className='w-75' />
                <br />

                <label htmlFor="" className='fw-bolder'>Seats Remaining: </label>
                <input onChange={e => setBusDetails({ ...busDetails, seatsRemaining: e.target.value })} type="text" className='w-75' />
                <br />

                <label htmlFor="" className='fw-bolder'>Fare Per Seats: </label>
                <input onChange={e => setBusDetails({ ...busDetails, fare: e.target.value })} type="text" className='w-75' />
                <br />

                <label htmlFor="" className='fw-bolder'>Date: </label>
                <input onChange={e => setBusDetails({ ...busDetails, date: e.target.value })} type="date" className='w-75' />
                <br />

                <label htmlFor="" className='fw-bolder'>Time: </label>
                <input onChange={e => setBusDetails({ ...busDetails, time: e.target.value })} type="text" className='w-75' />
                <br />

                <button onClick={handleAddBus} className='btn fw-bolder text-white w-50  mb-3' style={{ backgroundColor: "rgb(251, 139, 139)" }}>Add Bus</button>
            </div>
        </div>
    )
}

export default AddBus