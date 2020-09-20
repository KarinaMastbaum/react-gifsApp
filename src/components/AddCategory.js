// Utilizar como atajo rafc para ue me importe react y me cree la funcion directamete
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories } ) => {

    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    } 

    const handlesubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim().length > 1) {
            setCategories(cats => [inputValue, ...cats, ]);
            setinputValue('');
        }
        
    }

    return (
        <>
        <form onSubmit={ handlesubmit }>
            <input className="inputValue"
                placeholder="Buscar"
                type= "text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}