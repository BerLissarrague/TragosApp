import React, { useState, useEffect } from 'react';
import { tragosService } from "../Servicios/main_service";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";

function BuscarPorIngrediente() {
    const [serchIngredients, setSerchIngredients] = useState(null);
    const [newIngredients, setNewIngredients] = useState(null)

    const handelInput = ({ target }) => {
        setSerchIngredients(target.value)
    }

    const handelDrink = (e) => {
        e.preventDefault();
        fetchData()
    }
    const fetchData = async () => {
        const drink = await tragosService.getSerchIngredient(serchIngredients);
        console.log(drink)
        setNewIngredients(drink)
    };
    console.log(newIngredients)

    useEffect(() => {
        fetchData();
    }, []);
    return (
        (!newIngredients) ?
            <Form className="container" onSubmit={handelDrink}>
                <Form.Group className="container mb-3" controlId="formBasicEmail">
                    <Form.Label ><h2>Busca tu ingrediete favorita</h2></Form.Label>
                    <Form.Select className="inputsarch" type="text" placeholder="Enter email" onChange={handelInput} >
                        <option value=""></option>
                        <option value="Gin">Gin</option>
                        <option value="vodka">vodka</option>
                        <option value="rum">rum</option>
                        <option value="orange">Naranja</option>
                        <option value="lemon">Limon</option>
                        <option value="cherry">Frutilla</option>
                        <option value="tequila">Tequila</option>

                    </Form.Select>
                </Form.Group>
                <Button className='bntsarch m-lg-3' variant="primary" type="submit">
                    Submit
                </Button>
            </Form> : (newIngredients.map(trago => {
                const { idDrink, strInstructions, strDrinkThumb, strDrink } = trago;
                return (

                    <div key={idDrink}>
                        <Card className="main-card">
                            <Card.Img variant="top" src={""} />
                            <Card.Body>
                                <Card.Title>{strDrink}</Card.Title>
                                <Card.Text>{strInstructions}</Card.Text>
                                <img
                                    className="card-image"
                                    src={strDrinkThumb}
                                    alt="drink-img"
                                />
                            </Card.Body>
                        </Card>
                    </div>
                )
            }))
    )
}
export default BuscarPorIngrediente