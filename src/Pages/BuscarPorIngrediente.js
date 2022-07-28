import React, { useState } from "react";
import { tragosService } from "../Servicios/main_service";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardComponent from "../Components/CardComponent";
import Card from "react-bootstrap/Card";

function BuscarPorIngrediente() {
	const [searchIngredients, setSearchIngredients] = useState("");
	const [newIngredients, setNewIngredients] = useState([]);

	const handelInput = (e) => {
		e.preventDefault()
		setSearchIngredients(e.target.value);
	};

	const handelDrink = (e) => {
		e.preventDefault();
		fetchData();
	};
	const fetchData = async () => {
		const drink = await tragosService.getSearchIngredient(
			searchIngredients
		);
		setNewIngredients(drink);
	};

	return (
		<>
			<Form
				className="container form-container mt-4"
				onSubmit={(e) => handelDrink(e)}
			>
				<Form.Group
					className="container mb-3"
					controlId="formBasicEmail"
				>
					<Form.Label>
						<h2>Busca tu ingrediente favorito</h2>
					</Form.Label>
					<Form.Select
						className="input-search"
						type="text"
						value={searchIngredients}
						onChange={(e) => handelInput(e)}
					>
						<option value="">-- Select ingredient --</option>
						<option value="Gin">Gin</option>
						<option value="vodka">Vodka</option>
						<option value="rum">Rum</option>
						<option value="orange">Naranja</option>
						<option value="lemon">Limon</option>
						<option value="Grenadine">Granadina</option>
						<option value="tequila">Tequila</option>
					</Form.Select>
				</Form.Group>
				<Button
					className="mb-5 mt-3 btn-form"
					variant="primary"
					type="submit"
				>
					Buscar
				</Button>
			</Form>
			{!newIngredients && (
				<div className="d-flex flex-row flex-wrap justify-content-around" >
					<Card>
						<Card.Title classes='main-card'
							idDrink="noDrink" >No hay trago</Card.Title>
					</Card>
				</div>
			)}
			{newIngredients && (
				<div className="d-flex flex-row flex-wrap justify-content-around">
					{newIngredients.map((trago) => {
						const {
							idDrink,
							strInstructions,
							strDrinkThumb,
							strDrink
						} = trago;
						return (
							< CardComponent
								key={idDrink}
								idDrink={idDrink}
								strInstructions={strInstructions}
								strDrinkThumb={strDrinkThumb}
								strDrink={strDrink}
								classes='multiple-card'
							/>
						);
					})}
				</div>
			)}
		</>
	);
}
export default BuscarPorIngrediente;
