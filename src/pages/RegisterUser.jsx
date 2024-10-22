import React, { useState } from 'react'
import seatimg from '../assets/seatimg.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import { addUserDetailsAPI } from '../services/allAPI'
import Header from '../components/Header'

const RegisterUser = () => {

    const navigate = useNavigate()

    const [userDetails, setUserDetails] = useState({
        name: "",
        phone: "",
        email: "",
        password:"",
        tickets: []
    })
    // const [name, setName] = useState("")
    // const [phoneNumber, setPhoneNumber] = useState("")
    const [isPhoneNumberInvalid, setIsPhoneNumberInvalid] = useState(false)
    // const [email, setEmail] = useState("")
    const [isEmailInvalid, setIsEmailInvalid] = useState(false)
    const [passwordInput, setPasswordInput] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isconfirmPwdInvalid, setIsconfirmPwdInvalid] = useState(false)


    const userIputValidation = (inputTag) => {
        const { name, value } = inputTag
        // console.log(name, value);
        // console.log(!!value.match(/^[1-9]\d{9}$/));
        if (name == "Mobile") {
            setUserDetails({ ...userDetails, phone: value })
            !!value.match(/^[1-9]\d{9}$/) ? setIsPhoneNumberInvalid(false) : setIsPhoneNumberInvalid(true)
        } else if (name == "email") {
            setUserDetails({ ...userDetails, email: value })
            !!value.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/) ? setIsEmailInvalid(false) : setIsEmailInvalid(true)
        } else if (name == "confirmpwd") {
            console.log(value);
            
            setConfirmPassword(value)
            // !!passwordInput.match(confirmPassword) ? setIsconfirmPwdInvalid(false) : setIsconfirmPwdInvalid(true)
            if(passwordInput==confirmPassword){
                setIsconfirmPwdInvalid(false)
                setUserDetails({ ...userDetails, password:passwordInput })
            }else{
                setIsconfirmPwdInvalid(true)
                // console.log(confirmPassword);
                
            }


        }
    }
    
    const mystyle = {
        backgroundImage: `url(${seatimg})`,
        minHeight: "100vh",
        backgroundSize: "cover"
    }

    const handleAddUserDtails = async (userDetails) => {
        const { name, phone, email,password } = userDetails
        console.log(name,phone,email,password);
        // console.log(password,confirmPassword);

        if (name && phone && email && passwordInput && confirmPassword) {
            try {
                const response = await addUserDetailsAPI(userDetails)
                if (response.status >= 200 && response.status < 300) {
                    setUserDetails({
                        ...userDetails,
                        name: "",
                        phone: "",
                        email: "",
                        password:"",
                    })
                    alert("User Registration successfully Completed!!!!")
                    console.log(userDetails);
                }

            } catch {

            }
        } else {
            alert("Please Fill the Form Completely !!!!")
        }

    }

    

    return (
        <>
        <Header/>
        <div className='d-flex justify-content-center  align-items-center' style={mystyle}>

            <div className="register d-flex flex-column  justify-content-center  align-items-center  rounded  shadow border my-3 mx-5" style={{ backgroundColor: 'rgb(255,255,255,0.7', width: "450px" }}>
                <h1 className=' fw-bolder w-100 text-center py-2 rounded-top' style={{ color: "blue" }}>User Registration</h1>
                <div className='my-3 w-75'>
                    <label htmlFor="" className='fw-bolder'>UserName: </label>
                    <br />
                    <input onChange={e => setUserDetails({ ...userDetails, name: e.target.value })} type="text" className='w-100' />
                    <br />
                    <label htmlFor="" className='fw-bolder'>Phone Number:</label>
                    <br />
                    <input onChange={e => userIputValidation(e.target)} name='Mobile' type="text" className='w-100' />
                    <br />
                    {
                        isPhoneNumberInvalid &&
                        <div className='mt-1 text-danger fw-bolder ' >
                            *Invalid Mobile Number
                        </div>
                    }
                    <label htmlFor="" className='fw-bolder'>Email ID:</label>
                    <br />
                    <input onChange={e => userIputValidation(e.target)} name='email' type="email" className='w-100' />
                    <br />
                    {
                        isEmailInvalid &&
                        <div className='mt-1 text-danger fw-bolder ' >
                            *Invalid Email Id
                        </div>
                    }
                    <label htmlFor="" className='fw-bolder'>Password:</label>
                    <br />
                    <input onChange={e => setPasswordInput(e.target.value)} type="password" className='w-100' />
                    <br />
                   
                    <label htmlFor="" className='fw-bolder'>ConfirmPassword:</label>
                    <br />
                    <input onChange={e => userIputValidation(e.target)} name='confirmpwd' type="password" className='w-100' />
                    {
                        isconfirmPwdInvalid &&
                        <div className='mt-1 text-danger fw-bolder ' >
                            *Invalid password
                        </div>
                    }
                </div>
                <button onClick={() => handleAddUserDtails(userDetails)} className='btn w-75 bg-success text-center text-white fw-bolder my-3' style={{ textDecoration: "none" }}>Register</button>
                <div className='mb-3'>
                    Already have an accout
                    <Link className='ms-3 fw-bolder' to={'/login'}>
                        Login Here
                    </Link>
                </div>

            </div>


        </div>
        </>
        
    )
}

export default RegisterUser