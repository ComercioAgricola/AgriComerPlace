import './NavBar.css'
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoNav from '../../Assets/LogoMarketShop.svg';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

export default class NavBar extends Component {
    render() {
        return (
            <Navbar className='nav' expand="lg">
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
                           <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </Button>
                    </Form>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="btns-nav">
                        <Nav navbarScroll>
                            <NavLink className={'btnNav'} to={'/'}>Inicio</NavLink>
                            <NavLink className={'btnNav'} to={'/catalogoProductos'}>Catalogo</NavLink>
                            <NavLink className={'btnNav'} to={'/sobreNosotros'}>Sobre Nosotros</NavLink>
                            
                            <Button onClick={'/login'} className='btnPerfil'> 
                                <FontAwesomeIcon icon={faUser}/>
                            </Button>
                        
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        )
    }
}
