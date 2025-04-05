import ListCars from "../../actions/App/Http/Controllers/ListCars.js";
import {useEffect, useState} from "react";
import {CarList} from "../cars/CarList.js";
import {CreateCarForm} from "../cars/CreateCarForm.js";

function useListCarsQuery() {
    const [cars, setCars] = useState(undefined)
    const isLoading = cars === undefined

    useEffect(() => {
        fetch(ListCars().url)
            .then(response => response.json())
            .then(json => {
                setCars(json.cars)
            })
    }, [])

    return {
        cars,
        isLoading
    }
}

export function Cars() {
    const {cars, isLoading} = useListCarsQuery()

    return (
        <>
            <CreateCarForm/>
            { isLoading && <p>Loading cars...</p>}
            { !isLoading && <CarList cars={cars}/> }
        </>
    )
}
