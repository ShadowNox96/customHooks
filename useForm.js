import { useState } from "react";

/**
 * Este hook lo que hace es almacenar el valor del input value cada que este cambia, con esto lo que se obtiene es que no se reescribe codigo, gracias al handle input change, lo que hace es mantener el estado siempre cambiante cada que se cambia el input
 * @param {estado incial} initialState 
 */
export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () =>{
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
              
    };

    return [ values, handleInputChange, reset]
};
