import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../Login/registro.css'
import { Link as RouteLink, useNavigate } from 'react-router-dom';
import { auth } from '../Login/firebase';
import Form from 'react-bootstrap/Form';
import Checkbox from '@mui/material/Checkbox';
import { singUp } from '../../Services/user.service';


const theme = createTheme();

export default function Registro() {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [telephone, setTelephone] = useState("");
  const [direction, setDirection] = useState("");
  const [nameStore, setNameStore] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [storeDescription, setStoreDescription] = useState("");


  const [selectedOption, setSelectedOption] = useState('BUYER');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const registro = async (e) => {
    e.preventDefault();
    if (selectedOption === "SELLER") {
      const newUser = {
        type: selectedOption,
        name: name + " " + apellido,
        email: email,
        password: password,
        telephone: telephone,
        location: location,
        urlImg: "",
        storeName: nameStore,
        storeDescription: storeDescription,
        accountNumber: accountNumber
      }
      console.log(newUser)
      try {
        const res = await (await singUp(newUser)).data
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    } else {
      const newUser = {
        type: selectedOption,
        name: name + " " + apellido,
        email: email,
        password: password,
        telephone: telephone,
        location: location,
        urlImg: "",
        address: direction
      }
      console.log(newUser)
      try {
        const res = await (await singUp(newUser)).data
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }

    /*
    auth.createUserWitnEmailAndPassword(email, password).then((auth) => {
      console.log(auth);
      if (auth) {
        navigate('/path');
      }
    }).catch(err => alert(err.message))
    */
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('correo'),
      password: data.get('contraseña'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="s" className="containerRegistro">
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: "60%"
          }}        >
          <Typography component="h1" variant="h5">
            Registro
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <Grid container spacing={3}>

              <Grid item xs={12}  >
                <Typography >
                  Seleccione el Tipo de usuario:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
                <FormControlLabel control={<Checkbox value="BUYER" checked={selectedOption === "BUYER"} onChange={handleOptionChange} />
                } label="Comprador" />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={5}>
                <FormControlLabel control={<Checkbox value="SELLER" checked={selectedOption === "SELLER"} onChange={handleOptionChange} />
                } label="Vendedor" />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <TextField
                  autoComplete="given-name"
                  name="nombre"
                  required
                  fullWidth
                  id="nombre"
                  label="Nombre"
                  autoFocus
                  onChange={({ target }) => setName(target.value)}
                  value={name}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <TextField
                  required
                  fullWidth
                  id="apellidos"
                  label="Apellidos"
                  name="apellidos"
                  autoComplete="family-name"
                  onChange={({ target }) => setApellido(target.value)}
                  value={apellido}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <TextField
                  required
                  fullWidth
                  id="correo"
                  label="Correo electronico"
                  name="correo electronico"
                  autoComplete="correo electronico"
                  onChange={({ target }) => setEmail(target.value)}
                  value={email}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <TextField
                  required
                  fullWidth
                  name="contraseña"
                  label="Contraseña"
                  type="contraseña"
                  id="contraseña"
                  autoComplete="nueva contraseña"
                  onChange={({ target }) => setPassword(target.value)}
                  value={password}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                <TextField
                  required
                  fullWidth
                  id="ubicacion"
                  label="Ubicacion"
                  name="ubicacion"
                  autoComplete="family-name"
                  onChange={({ target }) => setLocation(target.value)}
                  value={location}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                <TextField
                  required
                  fullWidth
                  id="telefono"
                  label="Telefono"
                  name="telefono"
                  autoComplete="family-name"
                  onChange={({ target }) => setTelephone(target.value)}
                  value={telephone}
                />
              </Grid>
              {selectedOption === "BUYER"
                ? <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                  <TextField
                    required
                    fullWidth
                    id="direccion"
                    label="Direccion"
                    name="direccion"
                    autoComplete="family-name"
                    onChange={({ target }) => setDirection(target.value)}
                    value={direction}
                  />
                </Grid>
                : null}
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control type="file" />
                </Form.Group>
              </Grid>
              {selectedOption === "SELLER"
                ? <>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <TextField
                      required
                      fullWidth
                      id="nombreNegocio"
                      label="Nombre del negocio"
                      name="nombreNegocio"
                      autoComplete="family-name"
                      onChange={({ target }) => setNameStore(target.value)}
                      value={nameStore}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <TextField
                      required
                      fullWidth
                      id="numeroCuenta"
                      label="Numero de cuenta"
                      name="numeroCuenta"
                      autoComplete="family-name"
                      onChange={({ target }) => setAccountNumber(target.value)}
                      value={accountNumber}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                      required
                      fullWidth
                      id="descripcionNegocio"
                      label="Descripcion del negocio"
                      name="descripcionNegocio"
                      autoComplete="family-name"
                      onChange={({ target }) => setStoreDescription(target.value)}
                      value={storeDescription}
                    />
                  </Grid>
                </> : <></>}
            </Grid>
            <Button
              className='btnRegistro'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={registro}
            >
              Registrate
            </Button>
            <RouteLink to="../login" className='enlaces'>
              ¿Ya tienes una cuenta? Inicia Sesion.
            </RouteLink>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}