import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({insideBooking,insideTicket}) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="p-3 " style={{ background: "transparent" }}>
                <Container >
                    <Navbar.Brand >
                        <Link to={'/'} style={{ textDecoration: "none", fontSize: "30px" }} className='text-black fw-bolder'><i className='fa-solid fa-bus' />BookMyBus</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">

                            <Link to={'/ViewBusses'} style={{ textDecoration: "none", marginTop: "9px" }} className='text-black fw-bolder me-5'> View buses</Link>
                            {
                                insideBooking&&
                                <Link to={'/viewTicket'} style={{ textDecoration: "none", marginTop: "9px" }} className='text-black fw-bolder me-5'> View Tickets</Link>
                            }

{
                                insideTicket&&
                                <Link to={'/Booking'} style={{ textDecoration: "none", marginTop: "9px" }} className='text-black fw-bolder me-5'> Book my Bus</Link>
                            }

                            <div className='d-flex'>
                            <i className="fa-solid fa-user mt-2 me-2" style={{ fontSize: "20px" }}></i>
                            <NavDropdown title="SignUp/SignIn" id="navbarScrollingDropdown">
                                <NavDropdown.Item >
                                    <Link to={'/register'} style={{ textDecoration: "none", color: "black" }}><i className="fa-solid fa-user-plus me-2"></i>SignUp
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to={'/login'} style={{ textDecoration: "none", color: "black" }}><i className="fa-solid fa-user  me-2"></i>SignIn
                                    </Link>
                                </NavDropdown.Item> <NavDropdown.Item >
                                    <Link to={'/'} style={{ textDecoration: "none", color: "black" }}><i className="fa-solid fa-right-from-bracket me-2"></i>LogOut
                                    </Link>
                                </NavDropdown.Item>

                            </NavDropdown>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header