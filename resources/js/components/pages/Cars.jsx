import ListCars from "../../actions/App/Http/Controllers/ListCars.js";
import {useEffect, useState} from "react";

export function Cars() {
    const [cars, setCars] = useState(undefined)
    const isLoading = cars === undefined

    useEffect(() => {
        fetch(ListCars().url)
            .then(response => response.json())
            .then(json => {
                setCars(json.cars)
            })
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>{car.make}</li>
                ))}
            </ul>
        </div>
    )
}
