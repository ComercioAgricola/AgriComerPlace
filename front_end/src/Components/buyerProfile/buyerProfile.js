import './BuyerProfile.css';
import UserForm from './UserForm';
import Perfil from './Perfil';
import HistorialCompras from './HistorialCompras';
import { useState } from 'react';


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

  return (
    <div className='BuyerProfile'>
      {showUserFormIsShown && <UserForm onCloseUserForm={hideUserFormHandler}/>}


      <Perfil
        user={usuario}
        onShowUserForm={showUserFormHandler}
      />
      <HistorialCompras
        historial={historialCompras}
      />
    </div>
  );
}

export default BuyerProfile;