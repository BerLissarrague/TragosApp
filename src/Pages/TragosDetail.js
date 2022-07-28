import Card from "react-bootstrap/Card";
import { useParams } from 'react-router-dom';
import { tragosService } from "../Servicios/main_service"
import { useEffect, useState } from "react";
import SpinnerOne from "../Components/SpinnerOne"


const TragoDetail = () => {
    const [trago, setTrago] = useState({});
    let { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            const drink = await tragosService.getIdDrinks(id);
            setTrago(drink[0])
        }
        fetchData()
    }, [id])

    return (
        <div className="container">
            {(!trago) && <SpinnerOne />}
            {(trago) &&
                < Card id={trago.idDrink} className="main-card">
                    <Card.Title>{trago.strDrink}</Card.Title>
                    <Card.Img variant="top" src={trago.strDrinkThumb} />
                    < Card.Body >
                        <Card.Text>{trago.strInstructions}</Card.Text>
                    </Card.Body>
                </Card>}
        </div >

    )


}
export default TragoDetail;