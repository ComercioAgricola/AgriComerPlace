import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../Login/registro.css'
import { Link as RouteLink, useNavigate } from 'react-router-dom';
import { auth } from '../Login/firebase';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Registro() {

  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const [checkComprador, setCheckComprador] = useState(true);
  const [checkVendedor, setCheckVendedor] = useState(false);
  const activarComprador=() =>{setCheckComprador=true; setCheckVendedor=false};
  const activarVendedor=() =>{setCheckVendedor= true; setCheckComprador=false};

  const registro = (e) => {
    e.preventDefault();
    auth.createUserWitnEmailAndPassword(correo, contraseña).then((auth) => {
      console.log(auth);
      if (auth) {
        navigate('/path');

      }
    }).catch(err => alert(err.message))
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
        <CssBaseline />
        <Box
          className="boxRegistro"
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: "50%" 
          }}
        >
          <Typography component="h1" variant="h5">
            Registro
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <Grid container spacing={3}>

              <Grid item xs={12} >
                <Typography >
                Seleccione el Tipo de usuario:
                </Typography>

                <FormControlLabel
                  control={<Checkbox value="usuarioComprador" color="primary" checked={checkComprador} defaultChecked onChange={activarVendedor}/> }
                  label="Comprador"
                />
                <FormControlLabel
                  control={<Checkbox value="usuarioVendedor" color="primary" checked={checkVendedor} onChange={activarComprador} />}
                  label="Vendedor"
                />

              </Grid>
              <Grid item xs={18} sm={4}>
                <TextField
                  autoComplete="given-name"
                  name="nombre"
                  required
                  fullWidth
                  id="nombre"
                  label="Nombre"
                  autoFocus
                />
              </Grid>
              <Grid item xs={18} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="apellidos"
                  label="Apellidos"
                  name="apellidos"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={18}sm={4}>
                <TextField
                  required
                  fullWidth
                  id="telefono"
                  label="Telefono"
                  name="telefono"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="ubicacion"
                  label="Ubicacion"
                  name="ubicacion"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="nombreNegocio"
                  label="Nombre del negocio"
                  name="nombreNegocio"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={correo}
                  onChange={e => setCorreo(e.target.value)}
                  required
                  fullWidth
                  id="correo"
                  label="Correo electronico"
                  name="correo electronico"
                  autoComplete="correo electronico"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={contraseña}
                  onChange={e => setContraseña(e.target.value)}
                  required
                  fullWidth
                  name="contraseña"
                  label="Contraseña"
                  type="contraseña"
                  id="contraseña"
                  autoComplete="nueva contraseña"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="¿Deseas recibir promociones e informacion via correo electronico?"
                />
              </Grid>
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
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}