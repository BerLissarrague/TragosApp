import React, { useState, useEffect } from 'react';
import { tragosService } from "../Servicios/main_service";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BuscarTragosPage() {
    const [serchDrink, setSerchDrink] = useState(null);
    const [newDrinks, setNewDrinks] = useState(null)

    const handelInput = ({ target }) => {
        setSerchDrink(target.value)
    }

    const handelDrink = (e) => {
        e.preventDefault();
        fetchData()
    }
    const fetchData = async () => {
        const drink = await tragosService.getSerchDrink(serchDrink);
        console.log(drink)
        setNewDrinks(drink)
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='container' >
            {(!newDrinks) ?
                <Form className="container" onSubmit={handelDrink}>
                    <Form.Group className="container mb-3" controlId="formBasicEmail">
                        <Form.Label ><h2>Ingresa tu bebida favorita</h2></Form.Label>
                        <Form.Control className="inputsarch" type="text" placeholder="Enter email" onChange={handelInput} />
                    </Form.Group>
                    <Button className='bntsarch m-lg-3' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                : (newDrinks.map(trago => {
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


            }
        </div >

    )
}


export default BuscarTragosPage;