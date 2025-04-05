import ListCars from "../../actions/App/Http/Controllers/ListCars.js";
import {CarList} from "../cars/CarList.js";
import {CreateCarForm} from "../cars/CreateCarForm.js";
import {useQuery} from "@tanstack/react-query";

function useListCarsQuery() {
    const {data: cars, isLoading} = useQuery({
        queryFn: () => fetch(ListCars().url).then(response => response.json()),
        queryKey: ['cars']
    })

    return {
        cars: cars?.cars ?? [],
        isLoading
    }
}

export function Cars() {
    const {cars, isLoading} = useListCarsQuery()

    return (
        <>
            <CreateCarForm/>
            {isLoading && <p>Loading cars...</p>}
            {!isLoading && <CarList cars={cars}/>}
        </>
    )
}
