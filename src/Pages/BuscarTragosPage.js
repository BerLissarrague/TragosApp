import React, { useState } from "react";
import { tragosService } from "../Servicios/main_service";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardComponent from "../Components/CardComponent";
import Card from "react-bootstrap/Card";

const BuscarTragosPage = () => {

	const [searchDrink, setSearchDrink] = useState("");
	const [newDrinks, setNewDrinks] = useState([]);

	const handelInput = (e) => {
		e.preventDefault()
		setSearchDrink(e.target.value);
	};

	const handelDrink = async (e) => {
		e.preventDefault();
		const drink = await tragosService.getSearchDrink(searchDrink);
		setNewDrinks(drink);
	};

	return (
		<>
			<Form className="container form-container mt-4">
				<Form.Group
					className="container mb-3"
					controlId="formBasicEmail"
				>
					<Form.Label>
						<h2>Ingresa tu bebida favorita</h2>
					</Form.Label>
					<Form.Control
						className="input-search"
						type="text"
						value={searchDrink}
						placeholder="Su bebida favorita"
						onChange={(e) => handelInput(e)}
					/>
				</Form.Group>
				<Button
					className="mb-5 mt-3 btn-form"
					variant="primary"
					type="submit"
					onClick={(e) => handelDrink(e)}
				>
					Buscar
				</Button>
			</Form>
			{!newDrinks &&
				<div className="d-flex flex-row flex-wrap justify-content-around">
					<Card className="p-4">
						<Card.Title classes='main-card'
							idDrink="noDrink" >No hay trago</Card.Title>
					</Card>

				</div>}
			<div className="align-items-start  flex-row flex-wrap justify-content-around cards">
				{newDrinks &&
					newDrinks.map((trago) => {
						const {
							idDrink,
							strInstructions,
							strDrinkThumb,
							strDrink
						} = trago;
						return (
							<CardComponent
								key={idDrink}
								idDrink={idDrink}
								strInstructions={strInstructions}
								strDrinkThumb={strDrinkThumb}
								strDrink={strDrink}
								classes='multiple-card '
							/>
						);
					})
				}
			</div>
		</>
	)
}


export default BuscarTragosPage;
