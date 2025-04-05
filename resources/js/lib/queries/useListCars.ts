import {useSuspenseQuery} from "@tanstack/react-query";
import ListCars from "../../wayfinder/actions/App/Http/Controllers/ListCars";

export function useListCars() {
    const {data} = useSuspenseQuery({
        queryFn: () => fetch(ListCars().url).then(response => response.json()),
        queryKey: ['cars']
    })

    return data.cars
}
