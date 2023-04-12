import { CardContent, Card} from "@mui/material";
import { GiPineapple, GiTomato} from "react-icons/gi";


function CategoriaDeseada() {
    return(
        <div className="categoriaDeseada" >

            <Card style={{backgroundColor: '#26BBB1',width:'1300px', marginLeft:'27px', marginTop:'20px'}}>
                <CardContent >
                    <Card style={{backgroundColor: '#CBEAE2', width:'980px', marginLeft: '290px', marginTop:'10px', height:'152px'}}>
                        <CardContent>
                            <h1 style={{fontSize:'80px', marginLeft:'50px'}}><GiPineapple /> <GiTomato/>
                                                            <h5>Frutas            Verduras</h5></h1>
                            

                        </CardContent>
                    </Card>
                </CardContent>
            </Card>

        </div>


    )

};

export default CategoriaDeseada;