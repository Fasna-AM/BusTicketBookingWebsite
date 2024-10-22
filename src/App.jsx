
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import RegisterUser from './pages/RegisterUser'
import Login from './pages/Login'
import ViewBus from './pages/ViewBus'
import BusBooking from './pages/BusBooking'
import Payment from './pages/Payment'
import ViewTicket from './pages/ViewTicket'
import AdminPage from './pages/AdminPage'
import UpdateBus from './components/UpdateBus'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/register' element={<RegisterUser/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/ViewBusses' element= {<ViewBus/>}/> 
      <Route path='/Booking' element= {<BusBooking/>}/> 
      <Route path='/payment' element= {<Payment/>}/> 
      <Route path='/viewTicket' element= {<ViewTicket/>}/> 
      <Route path='/admin' element= {<AdminPage/>}/> 
      <Route path='/updateBus/:id' element= {<UpdateBus/>}/> 


     </Routes>
    </>
  )
}

export default App
