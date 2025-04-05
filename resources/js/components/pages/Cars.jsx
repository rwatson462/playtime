import {CarList} from "../cars/CarList.js";
import {CreateCarForm} from "../cars/CreateCarForm.js";
import {useListCars} from "../../lib/queries/useListCars.js";

export function Cars() {
    const cars = useListCars()

    return (
        <>
            <CreateCarForm/>
            <CarList cars={cars}/>
        </>
    )
}
