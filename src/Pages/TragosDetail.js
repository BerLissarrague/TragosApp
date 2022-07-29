import { useParams } from 'react-router-dom';
import { tragosService } from "../Servicios/main_service";
import { useEffect, useState } from "react";
import SpinnerOne from "../Components/SpinnerOne";
import CardComponent from "../Components/CardComponent"
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
    console.log(trago)
    return (
        <div className="container">
            {(!trago) && <SpinnerOne />}
            {(trago) &&
                <div className='drink-container'>
                    {(!trago) && <SpinnerOne />}
                    {(trago) && <>
                        <CardComponent
                            key={trago.idDrink}
                            idDrink={trago.idDrink}
                            strInstructions={trago.strInstructions}
                            strDrinkThumb={trago.strDrinkThumb}
                            strDrink={trago.strDrink}
                            classes='multiple-card'
                        />
                        <CardComponent
                            strDrink={`ingredientes y cantidades para ${trago.strDrink}`}
                            strInstructions={
                                <table className="container table multiple-card">
                                    <thead>
                                        <tr>
                                            <td><h5>Ingredientes</h5></td>
                                            <td><h5>Cantidades</h5></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{trago.strIngredient1} </td>
                                            <td>{trago.strMeasure1}</td>
                                        </tr>
                                        <tr>
                                            <td>{trago.strIngredient2} </td>
                                            <td>{trago.strMeasure2}</td>
                                        </tr>
                                        <tr>
                                            <td>{trago.strIngredient3} </td>
                                            <td>{trago.strMeasure3}</td>
                                        </tr>
                                        <tr>
                                            <td>{trago.strIngredient4} </td>
                                            <td>{trago.strMeasure4}</td>
                                        </tr>
                                        <tr>
                                            <td>{trago.strIngredient5} </td>
                                            <td>{trago.strMeasure5}</td>
                                        </tr>
                                        <tr>
                                            <td>{trago.strIngredient6} </td>
                                            <td>{trago.strMeasure6}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            }
                        />
                    </>}
                </div>
            }
        </div>
    )
}
export default TragoDetail;