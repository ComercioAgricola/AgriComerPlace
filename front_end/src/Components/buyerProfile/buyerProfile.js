import './BuyerProfile.css';
import UserForm from './UserForm';
import Perfil from './Perfil';
import HistorialCompras from './HistorialCompras';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import IconoPerfil from './images/IconoPerfil.png';
import { useState } from 'react';
import ServicioImagen from './SubirImagen';








const usuario = {
  userName: "Xime",
  name: "Laura Ximena",
  surname: "Montoya Murillo",
  phone: "985978989",
};

const historialCompras=[{
  codigo: "1",
  nombre: "Arroz",
  cantidad: "2",
  valor: "10000"
},
{
  codigo: "2",
  nombre: "Arroz",
  cantidad: "2",
  valor: "10000"
}
];



function BuyerProfile() {
  const[showUserFormIsShown, setUserFormIsShown] = useState(false);

  function showUserFormHandler () {
    setUserFormIsShown(true);
  };

  function hideUserFormHandler (){
    setUserFormIsShown(false);
  };
  
  const  [key, setKey] = useState('detalles');
  return (
    <div className='BuyerProfile' >
      {showUserFormIsShown && <UserForm onCloseUserForm={hideUserFormHandler}/>}
      
      <img  className="iconoPerfil" id='imgPerfil'/>
      <ServicioImagen className='iconoPerfil' />

      <h3 className="saludoPerfil">Hola {usuario.name}!</h3>
      
      
      
      
      
      

      <Tabs
          defaultActiveKey="profileBuyer"
          id="profileBuyer"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          style={{backgroundColor: 'white', marginTop:'30px'}}

  >
          <Tab eventKey="detalles" title="DETALLES">
            <Perfil
              user={usuario}
              onShowUserForm={showUserFormHandler}
            />
            
          </Tab>
          <Tab eventKey="carrito" title="CARRITO DE COMPRAS" >
            
          </Tab>
          <Tab eventKey="historial" title="HISTORIAL DE COMPRAS">
            <HistorialCompras
              historial={historialCompras}
            />
            
          </Tab>
          <Tab eventKey="producto" title="PRODUCTOS FAVORITOS">
            
          </Tab>
        </Tabs>
    </div>
  );
}

export default BuyerProfile;