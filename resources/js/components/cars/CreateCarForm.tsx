import {useCreateCar} from "../../lib/mutations/useCreateCar";

export function CreateCarForm() {
    const createCar = useCreateCar()

    return (
        <form onSubmit={createCar} className={'border rounded p-2 flex flex-col gap-y-2'}>
            <fieldset className={'flex flex-col gap-y-2'}>
                <label htmlFor={'make'}>Make</label>
                <input type={'text'} name={'make'} placeholder={"Ford"}/>
            </fieldset>
            <p>
                <button type={'submit'}>Create car</button>
            </p>
        </form>
    )
}
