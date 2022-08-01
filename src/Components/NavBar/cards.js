import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const trago = { idDrink, strInstructions, strDrinkThumb, strDrink } ;
function cards({props}) {
  return (
    <div id={trago.idDrink}>
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
</Card></div>
  )
}

export default cards