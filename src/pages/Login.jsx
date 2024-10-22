import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import busimg2 from '../assets/busimg2.jpg'
import { getallusersAPI, getSingleUserAPI } from '../services/allAPI'

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const mystyle = {
    backgroundImage: `url(${busimg2})`,
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }

  const handleLogin = async () => {

    if (email && password) {
      console.log(email, password);
      if (email == "admin@gmail.com" && password == "admin") {
        navigate('/admin')

      } else {

        try {
          const response = await getallusersAPI()
          // console.log(response.data);
          const serverResponse = response.data
          const user = serverResponse?.find(user => user.email == email && user.password == password)

          console.log(user.id);
          sessionStorage.setItem("id", user.id)

          if (user) {
            navigate('/Booking')
          } else {
            alert("Invalid user name or password !!!")
          }

        } catch (err) {
          console.log(err);

        }
      }
    } else {
      alert("please fill the form completely !!!!")
    }

  }



  return (
    <div className='d-flex justify-content-center align-items-center w-100' style={mystyle}>
      <div className="border shadow rounded d-flex flex-column justify-content-center align-items-center  " style={{ backgroundColor: 'rgb(255,255,255,0.7', width: "350px" }}>
        <h1 className='fw-bolder'>Login</h1>
        <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <br />
          <label className='fw-bolder' htmlFor="">Email Id : </label>

          <div className='w-100 text-center'>
            <i className='fa-solid fa-user me-2'></i>
            <input onChange={e => setEmail(e.target.value)} type="email" className='w-75' />
          </div>
          <br />
          <label className='fw-bolder' htmlFor="">Password: </label>
          <div className='w-100 text-center'>
            <i className='fa-solid fa-lock me-2'></i>
            <input onChange={e => setPassword(e.target.value)} type="password" className='w-75' />
          </div>
        </div>
        <button onClick={handleLogin} className='w-75 btn bg-success text-center text-white fw-bolder my-3'>Log In</button>
        <div className='mb-3'>
          Create new accout
          <Link className='ms-3 fw-bolder' to={'/register'}>
            SignUp Here
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login