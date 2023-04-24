import React from 'react'
import Cookies from "universal-cookie"
import Button from 'react-bootstrap/Button';


export default function sellerProfile() {
  const cookies = new Cookies()

  const handleLogout = async (event) => {
    cookies.remove("userSession", { path: '/' })
    cookies.remove("userData", { path: '/' })
    cookies.remove("userType", { path: '/' })
    cookies.remove("idUser", { path: '/' })
    cookies.remove("isAuthenticate", { path: '/' })
    cookies.remove("token", { path: '/' })
    window.location.href = "/";
  };

  return (
    <div>sellerProfile {cookies.get('userSession').name}
      <Button onClick={handleLogout} className='btnNav'>Logout</Button>
    </div>

  )
}
