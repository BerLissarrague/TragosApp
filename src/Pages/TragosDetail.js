import { useParams } from "react-router-dom";
import { tragosService } from "../Servicios/main_service";
import { useEffect, useState } from "react";
import SpinnerOne from "../Components/SpinnerOne";
import CardComponent from "../Components/CardComponent";
import Table from 'react-bootstrap/Table';

const TragoDetail = () => {
    const [trago, setTrago] = useState({});
    const [ingredients, setIngredients] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const drink = await tragosService.getIdDrinks(id);
            setTrago(drink[0]);
            // array to partially load ingredients. Then we useState for ingredients
            let ings = [];
            // api has a total of 15 ingredients, but some of them are null
            for (var i=1; i < 15; i++){
    
                let ing = 'strIngredient'+i;
                let mea = 'strMeasure'+i;
                // if ingredients exist
                if (drink[0][ing]){
                    ings.push([drink[0][ing], drink[0][mea]]);
                }
            }
          
            setIngredients(ings);
        };
        fetchData();
    }, [id]);

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
                            <div className="card bg-light mt-3 card-medidas ">
                                <div className="card-body card-body-detail ">
                                    <h6>Proporciones</h6>
                                    <Table  className="container table card-tex formato">
                                        <thead >
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
                                            {ingredients.map((ing) => {
                                                return (                                        
                                                    <tr key={ing[0]}>
                                                        <td >{ing[0]}</td>
                                                        <td>{ing[1]}</td>                                       
                                                    </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>   );
};
export default TragoDetail;
