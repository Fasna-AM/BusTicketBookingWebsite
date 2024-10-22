import React, { useEffect, useState } from 'react'
import { getBusDetailsAPI, updateBusdetailsAPI } from '../services/allAPI'
import { FloatingLabel, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'


const UpdateBus = () => {

    const { id } = useParams()
    const navigate =useNavigate()

    const [busDetails, setBusDetails] = useState({})

    useEffect(() => {
        getBusDetails(id)

    }, [])

    const getBusDetails = async (busId) => {
        try {
            const response = await getBusDetailsAPI(busId)
            // console.log(response.data);
            setBusDetails(response.data)

        } catch (err) {
            console.log(err);

        }

    }

    const handleUpdate = async ()=>{
        if(id&&busDetails){
            try{
                const response = await updateBusdetailsAPI(id,busDetails)
                // console.log(response);
    
                alert("Updation Successfully Completed")
                navigate('/admin')

            }catch(err){
                console.log(err);
                
            }
        }else{
            alert("Updation Failed")
        }
        
    }

    console.log(busDetails);


    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "rgba(254, 251, 209, 0.838)" }}>
            <h1 className="text-primary fw-bolder">Update Busdetails Here !!!</h1>
            <div className=" border rounded border-5 p-2 mt-2 d-flex flex-column justify-content-center align-items-center" style={{width:"350px"}}>
               <div className='w-100'>
               <FloatingLabel
                    controlId="floatingBusName"
                    label="BusName"
                    className="mb-3"

                >
                    <Form.Control
                        type="text"
                        placeholder="BusName"
                        value={busDetails.name}
                        onChange={e=>setBusDetails({...busDetails,name:e.target.value})}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="source"
                    label="Source"
                    className="mb-3"

                >
                    <Form.Control
                        type="text"
                        placeholder="source"
                        value={busDetails.source}
                        onChange={e=>setBusDetails({...busDetails,source:e.target.value})}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="destination"
                    label="Destination"
                    className="mb-3"

                >
                    <Form.Control
                        type="text"
                        placeholder="destination"
                        value={busDetails.destination}
                        onChange={e=>setBusDetails({...busDetails,destination:e.target.value})}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="destination"
                    label="Destination"
                    className="mb-3"

                >
                    <Form.Control
                        type="text"
                        placeholder="destination"
                        value={busDetails.destination}
                        onChange={e=>setBusDetails({...busDetails,destination:e.target.value})}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="totalSeats"
                    label="TotalSeats"
                    className="mb-3"

                >
                    <Form.Control
                        type="text"
                        placeholder="totalSeats"
                        value={busDetails.totalSeats}
                        onChange={e=>setBusDetails({...busDetails,totalSeats:e.target.value})}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="seatsRemaining"
                    label="SeatsRemaining"
                    className="mb-3"

                >
                    <Form.Control
                        type="text"
                        placeholder="seatsRemaining"
                        value={busDetails.seatsRemaining}
                        onChange={e=>setBusDetails({...busDetails,seatsRemaining:e.target.value})}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="fare"
                    label="Fare Per Seat"
                    className="mb-3"

                >
                    <Form.Control
                        type="text"
                        placeholder="fare"
                        value={busDetails.fare}
                        onChange={e=>setBusDetails({...busDetails,fare:e.target.value})}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="date"
                    label="Date"
                    className="mb-3"

                >
                    <Form.Control
                        type="date"
                        placeholder="date"
                        value={busDetails.date}
                        onChange={e=>setBusDetails({...busDetails,date:e.target.value})}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="time"
                    label="Time"
                    className="mb-3"

                >
                    <Form.Control
                        type="text"
                        placeholder="time"
                        value={busDetails.time}
                        onChange={e=>setBusDetails({...busDetails,fatimere:e.target.value})}
                    />
                </FloatingLabel>
               </div>

                <button onClick={handleUpdate} className='btn btn-primary text-white fw-bolder  '>Save Updates</button>
            </div>
        </div>
    )
}

export default UpdateBus