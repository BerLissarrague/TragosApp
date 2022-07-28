import { useParams } from 'react-router-dom';
import { tragosService } from "../Servicios/main_service"
import { useEffect, useState } from "react";
import SpinnerOne from "../Components/SpinnerOne";
import CardComponent from '../Components/CardComponent';

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
        <div className='drink-container'>
            {(!trago) && <SpinnerOne />}
            {(trago) &&
                <CardComponent
                    key={trago.idDrink}
                    idDrink={trago.idDrink}
                    strInstructions={trago.strInstructions}
                    strDrinkThumb={trago.strDrinkThumb}
                    strDrink={trago.strDrink}
                    classes='multiple-card'
                />}
        </div>
    )
}

export default TragoDetail;