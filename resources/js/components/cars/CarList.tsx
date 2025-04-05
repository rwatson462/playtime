
interface Car {
    id: string
    make: string
}

export function CarList({ cars }: { cars: Car[]}) {
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
