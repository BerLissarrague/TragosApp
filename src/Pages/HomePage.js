import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { tragosService } from "../Servicios/main_service";

function HomePage() {
    const [trago, setTrago] = useState(null); //tenes que iniciarlo con algo

    // generamos una funcion con async y await para que la const drink tenga el dato correcto antes de hacer setTrago
    const fetchData = async () => {
        const drink = await tragosService.getRandomDrink();
        setTrago(drink[0]);
    };

    useEffect(() => {
        // llamamos a la funcion que trae la data. No podiamos hacer directamente el async con el useEffect
        fetchData();
    }, []);
    return (
        <div className="main-container">
            {trago && (
                <Card className="main-card">
                    <Card.Img variant="top" src={""} />
                    <Card.Body>
                        <Card.Title>{trago.strDrink}</Card.Title>
                        <Card.Text>{trago.strInstructions}</Card.Text>
                        <img
                            className="card-image"
                            src={trago.strDrinkThumb}
                            alt="drink-img"
                        ></img>
                    </Card.Body>
                    <Button
                        variant="primary"
                        className="card-button"
                        onClick={() => fetchData()}>
                        Cambiar trago
                    </Button>
                </Card>
            )}
            {!trago && <h3>Loading...</h3>}
        </div>

    )
}

export default HomePage