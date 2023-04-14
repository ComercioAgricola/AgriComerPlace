import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from './Modal';
import FormStyle from './FormStyle.module.css';
import InputStyle from './Input.module.css';
import TextField from '@mui/material/TextField';
import ServicioImagen from './SubirImagen'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function UserForm(props) {
  
  return (
    <Modal onCloseUserForm={props.onCloseUserForm}>
    <Card sx={{ height: 400, overflowY: 'scroll' }}>
      <CardContent  >
      <Typography sx={{ fontSize: 24 }} style={{marginLeft: 200}} >
                    Actualiza tus datos
        </Typography>
          <form className={InputStyle.input}>
            <label htmlFor='idNombre' style={{marginTop:'50px'}}className={InputStyle.inputLabel}>Nombres: </label> 
            <TextField id="idNombre" label="Nombres"  />

            <label htmlFor='idApellido' className={InputStyle.inputLabel}>Apellidos: </label> 
            <TextField id="idApellido" label="Apellidos"  />

            <label htmlFor='idCelular' className={InputStyle.inputLabel}>Celular: </label> 
            <TextField id="idCelular" label="celular"  />

            <label htmlFor='idFoto' className={InputStyle.inputLabel}>Selecciona tu foto de peril aquí: </label> 
            <a >
              <ServicioImagen
                onSetImage={props.onSetImage}
              />
            </a>
            


            <Button 
              onClick={props.onCloseUserForm}
              style={{backgroundColor: '#1976D2', marginTop: 50, marginLeft: '10px', color:'black'}}>
                Cerrar
            </Button>
          </form>
      </CardContent>
    </Card >
    </Modal>
  );
}