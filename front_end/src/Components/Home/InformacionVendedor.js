import { CardContent, Card, colors} from "@mui/material";
import VendedorImg from '/Users/ximena/Desktop/soft3/AgroMarketPlace/AgriComerPlace/front_end/src/Assets/infoVendedor.png';
import { alignPropType } from "react-bootstrap/esm/types";


function InformacionVendedor() {
    return(
        <div className="informacionVendedor" >

            <Card style={{backgroundColor: '#CBEAE2',width:'1300px', marginLeft:'27px', marginTop:'20px'}}>
                <CardContent style={{fontSize: '22px', alignContent:'left'}}>
                    <p style={{color: '#265073', textAlign: 'left'}}>
                        Si estás interesado en convertirte en vendedor en AgroMarketPlace, 
                        estás en el lugar correcto. Aquí te explicamos los pasos necesarios para que 
                        puedas empezar a vender tus productos en nuestra plataforma:
                    </p>
                    <p style={{color: '#265073', textAlign: 'left'}}>
                        1. Lo primero que debes hacer es registrarte en nuestra página web y crear una cuenta de vendedor. Si ya tienes una cuenta pero de cliente, deberas crearte una nueva.
                    </p>    
                    <p style={{color: '#265073', textAlign: 'left'}}>
                        2. Una vez que hayas iniciado sesión, completa tu perfil de vendedor. Asegúrate de proporcionar información detallada sobre tu empresa.
                    </p>
                    <p style={{color: '#265073', textAlign: 'left'}}>   
                        3. Crea tus anuncios de productos en nuestra plataforma. Asegúrate de incluir descripciones detalladas de tus productos y de agregar imágenes de alta calidad.
                    </p>
                    <p style={{color: '#265073', textAlign: 'left'}}>  
                        4. Configura tus opciones de pago y envío. Puedes elegir entre varias opciones de pago y envío para adaptarte a las necesidades de tus clientes.
                    </p> 
                    <p style={{color: '#265073', textAlign: 'left'}}>   
                        5. Comienza a vender tus productos a través de nuestra plataforma. ¡Listo! Ya eres un vendedor de AgroMarketPlace.
                    </p>
                    <p style={{color: '#265073', textAlign: 'left'}}>

                        Si necesitas ayuda en cualquier momento durante el proceso, nuestro equipo de soporte está disponible para ayudarte. 

                    </p>
                    <p style={{color: '#265073', textAlign: 'left'}}>

                        ¡Buena suerte en tu nueva aventura como vendedor en AgroMarketPlace!

                    </p>
                    </CardContent>

                    <CardContent style={{color: '#265073', alignContent: 'right'}}>
                       
                            <img src={VendedorImg} className="vendedorImg" style={{width:'500px', height:'500px', textAlign:"right", borderRadius: '70%'}} />

                        
                    </CardContent>
            </Card>

        </div>


    )

};

export default InformacionVendedor;