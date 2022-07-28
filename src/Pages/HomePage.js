import React, { useState, useEffect } from "react";
import CardComponent from "../Components/CardComponent";
import { tragosService } from "../Servicios/main_service";
import SpinnerOne from "../Components/SpinnerOne"

function HomePage() {
    const [trago, setTrago] = useState(null);

    const fetchData = async () => {
        const drink = await tragosService.getRandomDrink();
        setTrago(drink[0]);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <h3 className="mt-5 mb-8 t">Trago del dia</h3>
            {(!trago) ? <SpinnerOne /> :
                (trago && (
                    <CardComponent {...trago} classes="main-card" />
                ))}
        </div>
    )
}

export default HomePage;