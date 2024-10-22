import React from 'react'
import Header from '../components/Header'
import busimg1 from '../assets/busimg1.avif'
import { Link } from 'react-router-dom'


const Landing= () => {
    const myStyle = {
        backgroundImage: `url(${busimg1})`,
        backgroundSize:"cover",
        minHeight : "100vh",
        backgroundPosition :"center",
        width:"100%"
        // marginTop:'-90px',
        // backgroundAttachment: 'sticky',



    }
        return (
            <>
                <div className="landing row position-absolute" style={myStyle}>
                    <div className="col-lg"></div>
                    <div className="col-lg d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-white fw-bolder " style={{fontSize:"80px"}}>
                       Travel with us
                    </h1>
                    <div className='m-5'>
                    <Link to={'/'} className='btn bg-black text-white px-3 py-2 me-3'>More Info</Link>
                    <Link to={'/login'} className='btn  text-white px-3 py-2' style={{backgroundColor:"rgb(251, 139, 139)"}}>Book Your Tickets</Link>
                    </div>

                    </div>
                </div>
                <Header />
 
            </>
        )
    }

export default Landing
