import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imageCargando from "../../Assets/Cargando.svg"


export default function cardProduct(props) {
  return (
    <Card style={{ width: '18rem'}} className='cardColor'>
      <Card.Img  src={imageCargando} style={{ background_color: 'gray'}}/>
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>
          Precio {props.product.price} por {props.product.unitSale}
        </Card.Text>
      </Card.Body>
      <Button className='btnCard'>Ver mas</Button>
    </Card>
  )
}

