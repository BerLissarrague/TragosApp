import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getRandomDrink } from "../Servicios/main_service";

function CardTrago() {
  const [trago, setTrago] = useState();

  useEffect(() => {
    getRandomDrink(setTrago);
  }, []);

  console.log(trago);
  
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={""} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">Cambiar trago</Button>
      </Card.Body>
    </Card>
  );
}
export default CardTrago;
