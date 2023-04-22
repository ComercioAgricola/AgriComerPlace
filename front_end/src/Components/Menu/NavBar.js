import './NavBar.css';
import '../Login/login.css';

import Cookies from "universal-cookie"
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import LogoInicio from '../../Assets/logologin.svg';
import { Link as RouteLink } from 'react-router-dom';
import { singIn } from "../../Services/user.service";
import LogoSmallNav from '../../Assets/small_logo.svg';
import LogoNav from '../../Assets/LogoMarketShop.svg';

import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <NavLink to={'/sobreNosotros'}> AgroMarketSHop </NavLink>
            {new Date().getFullYear()}{'.'}
        </Typography>
    );
}
const theme = createTheme();


export default function NavBar() {

    const cookies = new Cookies();
    const [show, setShow] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });


    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const res = (await singIn(userEmail, userPassword)).data;
            cookies.set("token", res.token, { path: '/' })
            cookies.set("isAuthenticate", true, { path: '/' })
            cookies.set("userData", res.dataUser, { path: '/' })
            cookies.set("idUser", res.dataUser._id, { path: '/' })
            cookies.set("userSession", res.userFound, { path: '/' })
            cookies.set("userType", res.userFound.type, { path: '/' })

            res.userFound.type === "SELLER"
                ? window.location.href = "/mi_negocio/" + res.dataUser._id
                : window.location.href = "/mi_perfil/" + res.dataUser._id
        } catch (error) {
            console.log(error.msg)
        }
    };
    console.log(windowSize.width <= 1400)
    return (
        <Navbar className='nav' expand="xxl">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton />
                <Modal.Body>
                    <ThemeProvider theme={theme}>
                        <Container component="main">
                            <CssBaseline />
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                                <img src={LogoInicio} className="logo2" alt="AgroMarketPlace" />
                                <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }} >
                                    <TextField required autoFocus id="email" margin="normal" label="Correo electronico" className='textfiel-login'
                                        name="email"
                                        autoComplete="email"
                                        onChange={({ target }) => setUserEmail(target.value)}
                                        value={userEmail}
                                    />
                                    <TextField required margin="normal" id="password" type="password" label="Contraseña" className='textfiel-login'
                                        name="password"
                                        value={userPassword}
                                        autoComplete="current-password"
                                        onChange={({ target }) => setUserPassword(target.value)}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Recordarme"
                                    />
                                    <RouteLink to="" className='enlaces'>
                                        ¿Olvidaste tu contraseña?
                                    </RouteLink>
                                    <RouteLink onClick={handleClose} to="../registro" className='enlaces'>
                                        {"¿No tienes una cuenta? Registrate"}
                                    </RouteLink>
                                    <Container fluid className='footermodel'>
                                        <Button className='btnLogin2' type="submit" sx={{ mt: 5, mb: 2 }}>
                                            Iniciar Sesion
                                        </Button>
                                    </Container>
                                </Box>
                            </Box>
                            <Copyright sx={{ mt: 2 }} />
                        </Container>
                    </ThemeProvider>
                </Modal.Body>
            </Modal>

            <Container fluid>
                <NavLink to={'/'}>
                    {windowSize.width >= 500
                        ? <img src={LogoNav} className="logo" alt="AgroMarketPlace" />
                        : <img src={LogoSmallNav} className="small-logo" alt="AgroMarketPlace" />}
                </NavLink>
                {windowSize.width >= 800
                    ? <>
                        <Form className="d-flex buscador2" >
                            <FloatingLabel controlId="floatingInput" label="Ingresa el nombre del producto" className="search-textField ">
                                <Form.Control className="search-textField" type="text" placeholder="INgresa el nombre del" />
                            </FloatingLabel>
                            <Button className='btnSearch' type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Button>
                        </Form>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="btns-nav">
                            <Nav navbarScroll className='navBar'>
                                {windowSize.width <= 1400
                                    ? <>
                                        {cookies.get('isAuthenticate')
                                            ? cookies.get('userType') === 'SELLER'
                                                ? <NavLink className={'btnPerfil'} to={'/mi_negocio/' + cookies.get('idUser')}><FontAwesomeIcon icon={faUser} /></NavLink>
                                                : <NavLink className={'btnPerfil'} to={'/mi_perfil/' + cookies.get('idUser')}><FontAwesomeIcon icon={faUser} /></NavLink>
                                            : <Button onClick={handleShow} className={'btnNav'}>Iniciar Sesion</Button>
                                        }
                                        <NavLink className={'btnNav'} to={'/'}>Inicio</NavLink>
                                        <NavLink className={'btnNav'} to={'/catalogoProductos'}>Catalogo</NavLink>
                                        <NavLink className={'btnNav'} to={'/sobreNosotros'}>Conocenos</NavLink>

                                    </> : <>
                                        <NavLink className={'btnNav'} to={'/'}>Inicio</NavLink>
                                        <NavLink className={'btnNav'} to={'/catalogoProductos'}>Catalogo</NavLink>
                                        <NavLink className={'btnNav'} to={'/sobreNosotros'}>Conocenos</NavLink>
                                        {cookies.get('isAuthenticate')
                                            ? cookies.get('userType') === 'SELLER'
                                                ? <NavLink className={'btnPerfil'} to={'/mi_negocio/' + cookies.get('idUser')}><FontAwesomeIcon icon={faUser} /></NavLink>
                                                : <NavLink className={'btnPerfil'} to={'/mi_perfil/' + cookies.get('idUser')}><FontAwesomeIcon icon={faUser} /></NavLink>
                                            : <Button onClick={handleShow} className={'btnNav'}>Iniciar Sesion</Button>
                                        }
                                    </>
                                }

                            </Nav>
                        </Navbar.Collapse>
                    </>
                    : <>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="btns-nav">
                            <Nav navbarScroll  className='navBar'>
                                {windowSize.width <= 1400
                                    ? <>
                                        {cookies.get('isAuthenticate')
                                            ? cookies.get('userType') === 'SELLER'
                                                ? <NavLink className={'btnPerfil'} to={'/mi_negocio/' + cookies.get('idUser')}><FontAwesomeIcon icon={faUser} /></NavLink>
                                                : <NavLink className={'btnPerfil'} to={'/mi_perfil/' + cookies.get('idUser')}><FontAwesomeIcon icon={faUser} /></NavLink>
                                            : <Button onClick={handleShow} className={'btnNav'}>Iniciar Sesion</Button>
                                        }
                                        <NavLink className={'btnNav'} to={'/'}>Inicio</NavLink>
                                        <NavLink className={'btnNav'} to={'/catalogoProductos'}>Catalogo</NavLink>
                                        <NavLink className={'btnNav'} to={'/sobreNosotros'}>Conocenos</NavLink>
                                    </>
                                    : <>
                                        <NavLink className={'btnNav'} to={'/'}>Inicio</NavLink>
                                        <NavLink className={'btnNav'} to={'/catalogoProductos'}>Catalogo</NavLink>
                                        <NavLink className={'btnNav'} to={'/sobreNosotros'}>Conocenos</NavLink>
                                        {cookies.get('isAuthenticate')
                                            ? cookies.get('userType') === 'SELLER'
                                                ? <NavLink className={'btnPerfil'} to={'/mi_negocio/' + cookies.get('idUser')}><FontAwesomeIcon icon={faUser} /></NavLink>
                                                : <NavLink className={'btnPerfil'} to={'/mi_perfil/' + cookies.get('idUser')}><FontAwesomeIcon icon={faUser} /></NavLink>
                                            : <Button onClick={handleShow} className={'btnNav'}>Iniciar Sesion</Button>
                                        }
                                    </>
                                }
                            </Nav>
                        </Navbar.Collapse>
                        <Form className="d-flex buscador">
                            <FloatingLabel controlId="floatingInput" label="Ingresa el nombre del producto" className="search-textField">
                                <Form.Control className="search-textField" type="text" placeholder="INgresa el nombre del" />
                            </FloatingLabel>
                            <Button className='btnSearch' type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Button>
                        </Form>

                    </>}

            </Container>
        </Navbar>
    )

}
