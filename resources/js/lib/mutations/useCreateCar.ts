import {useMutation, useQueryClient} from "@tanstack/react-query";
import CreateCar from "../../wayfinder/actions/App/Http/Controllers/CreateCar";
import {FormEvent} from "react";

export function useCreateCar() {
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
