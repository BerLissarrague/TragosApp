import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getRandomDrink } from "../Servicios/main_service";

function CardTrago() {
	const [trago, setTrago] = useState(null);

  const fetchData = async () => {
    const drink = await getRandomDrink();
    setTrago(drink[0]);
  };

	useEffect(() => {
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
	);
}
export default CardTrago;
