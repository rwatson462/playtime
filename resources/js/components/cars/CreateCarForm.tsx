import {createRef} from "react";
import CreateCar from "../../actions/App/Http/Controllers/CreateCar";

export function CreateCarForm() {
    const form = createRef<HTMLFormElement>()

    function submitForm(e) {
        e.preventDefault()

        const formData = new FormData(form.current)

        fetch(CreateCar().url, {
            body: formData,
            method: 'post',
        }).then(response => location.reload())
    }

    return (
        <form ref={form} onSubmit={submitForm} className={'border rounded p-2 flex flex-col gap-y-2'}>
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
