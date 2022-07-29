import { useParams } from "react-router-dom";
import { tragosService } from "../Servicios/main_service";
import { useEffect, useState } from "react";
import SpinnerOne from "../Components/SpinnerOne";
import CardComponent from "../Components/CardComponent";
const TragoDetail = () => {
    const [trago, setTrago] = useState({});
    let { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const drink = await tragosService.getIdDrinks(id);
            setTrago(drink[0]);
        };

        fetchData();
    }, [id]);

    let arryAxuIngredientes = [
        [`${trago.strIngredient1}`,`${trago.strMeasure1}`],
        [`${trago.strIngredient2}`,` ${trago.strMeasure2}`],
        [`${trago.strIngredient3}`,`${trago.strMeasure3}`],
        [`${trago.strIngredient4}`,` ${trago.strMeasure4}`],
        [`${trago.strIngredient5}`,` ${trago.strMeasure5}`],
        [`${trago.strIngredient6}`,` ${trago.strMeasure6}`],
        [`${trago.strIngredient7}`,` ${trago.strMeasure7}`]
    ]
   let index=0;

    return (
        <div className="container">
            {!trago && <SpinnerOne />}
            {trago && (
                <div className="drink-container">
                    {!trago && <SpinnerOne />}
                    {trago && (
                        <>
                            <CardComponent
                                key={trago.idDrink}
                                idDrink={trago.idDrink}
                                strInstructions={trago.strInstructions}
                                strDrinkThumb={trago.strDrinkThumb}
                                strDrink={trago.strDrink}
                                classes="multiple-card"
                            />
                            <div className="card bg-light mb-3">
                                <h3 className="card-header">{trago.strDrink}</h3>
                                <div className="card-body">
                                    <h6>Proporciones</h6>
                                    <table className=" container table card-text">
                                        <thead>
                                            <tr>
                                                <td>
                                                    <h5>Ingredientes</h5>
                                                </td>
                                                <td>
                                                    <h5>Cantidades</h5>
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>                                         
                                                {arryAxuIngredientes.map((ingredientes) => (                                                  
                                                    <tr key={index++}>
                                                        <td >{ingredientes[0]}</td>
                                                        <td>{ingredientes[1]}</td>                                       
                                                </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>   );
};
export default TragoDetail;
