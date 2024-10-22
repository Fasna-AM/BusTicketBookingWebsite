import React, { useEffect, useState } from 'react'
import { deleteBusAPI, getAllBusAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'

const BusDetails = ({addBusResponse}) => {

    const [allBus, setAllBus] = useState([])
    useEffect(() => {
        handleGetAllBus()
    }, [addBusResponse])

    const handleGetAllBus = async () => {
        try {
            const response = await getAllBusAPI()
            // console.log(response);
            setAllBus(response.data)


        } catch (err) {
            console.log(err);
        }
    }
    // console.log(allBus);

    const deleteBus = async(id)=>{
        await deleteBusAPI(id)
        handleGetAllBus()
    }
    
  

    return (
        <div>
            <h3 className="text-success fw-bolder text-center ">Bus Details</h3>
            <table className='table shadow mt-5 '>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Total Seats</th>
                        <th>Seats Remaining</th>
                        <th>Fare Per Seats</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allBus?.length>0 ?
                            allBus.map((item,index) => (
                                <tr key={item.id}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.source}</td>
                                    <td>{item.destination}</td>
                                    <td>{item.totalSeats} </td>
                                    <td>{item.seatsRemaining} </td>
                                    <td>{item.fare}</td>
                                    <td>{item.date}</td>
                                    <td>{item.time}</td>
                                    <Link to={`/updateBus/${item.id}`}  className='btn bg-primary text-white fw-bolder mb-2'>Update</Link>
                                    <button onClick={()=>deleteBus(item.id)} className='btn  '><i className="fa-solid fa-trash text-danger mb-2"></i></button>

                                </tr>
                            ))
                            :
                            <div className='text-danger fw-bolder'>
                                * No Bus Details Registered yet !!!
                            </div>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BusDetails