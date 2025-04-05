import {FormEvent} from "react";
import CreateCar from "../../actions/App/Http/Controllers/CreateCar";
import {useMutation, useQueryClient} from "@tanstack/react-query";

function useCreateCar() {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            const formData = new FormData(event.target)

            return fetch(CreateCar().url, {
                body: formData,
                method: 'post',
            })
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cars']})
    })

    return mutation.mutate
}

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
