import { useState } from "react"


export const useForm = ( initalForm = {}) => {
  
    const [formState, setFormState] = useState( initalForm);

    

    const onInputChange = ( { target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value,
        })
    }

    const onSubmit = () => {

        setFormState(initalForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onSubmit
    }
}
