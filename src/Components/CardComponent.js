import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const CardComponent = ({ idDrink, strDrinkThumb, strDrink, strInstructions, classes }) => {
    let componentClasses = classes ? classes : '';

    return (
        <Link to={`/trago-detail/${idDrink}`} className={`link ${componentClasses}`} >
            <Card id={idDrink}>
                <Card.Img variant="top" src={strDrinkThumb} />
                <Card.Body>
                    <Card.Title>{strDrink}</Card.Title>
                    <Card.Text>{strInstructions}</Card.Text>
                </Card.Body>
            </Card>
        </Link >
    )
}
export default CardComponent;