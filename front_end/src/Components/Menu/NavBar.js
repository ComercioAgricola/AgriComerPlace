import './NavBar.css'
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoNav from '../../Assets/LogoMarketShop.svg';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from '../Login/login';
import '../Login/login.css'

export default function NavBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        return (
            <Navbar className='nav' expand="lg">
             <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                
                </Modal.Header>
                <Modal.Body>
                    <Login></Login>
                </Modal.Body>
                <Modal.Footer className='footermodel'>
                <Container fluid>
                    <NavLink to={'/'}>
                        <img src={LogoNav} className="logo" alt="AgroMarketPlace" />
                    </NavLink>
                    <Form className="d-flex">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Ingresa el nombre del producto"
                            className="search-textField"
                        >
                            <Form.Control className="search-textField" type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <Button 
                        className='btnSearch' type="submit">
                           <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </Button>
                    </Form>
                    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="btns-nav">
                        <Nav navbarScroll>
                            <NavLink className={'btnNav'} to={'/'}>Inicio</NavLink>
                            <NavLink className={'btnNav'} to={'/catalogoProductos'}>Catalogo</NavLink>
                            <NavLink className={'btnNav'} to={'/sobreNosotros'}>Sobre Nosotros</NavLink>
                            <Button className='btnPerfil'> 
                                <FontAwesomeIcon icon={faUser}/>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>                    
                    <Button onClick={handleClose}
                        className='btnLogin2'
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Iniciar Sesion
                    </Button>
                </Modal.Footer>
            </Modal>
            <Container fluid>
                <NavLink to={'/'}>
                    <img src={LogoNav} className="logo" alt="AgroMarketPlace" />
                </NavLink>
                <Form className="d-flex">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Ingresa el nombre del producto"
                        className="search-textField"
                    >
                        <Form.Control className="search-textField" type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <Button className='btnSearch' type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="btns-nav">
                    <Nav navbarScroll>
                        <NavLink className={'btnNav'} to={'/'}>Inicio</NavLink>
                        <NavLink className={'btnNav'} to={'/catalogoProductos'}>Catalogo</NavLink>
                        <NavLink className={'btnNav'} to={'/sobreNosotros'}>Sobre Nosotros</NavLink>

                        <Button onClick={handleShow} className='btnPerfil'>
                            <FontAwesomeIcon icon={faUser} />
                        </Button>

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )

}
