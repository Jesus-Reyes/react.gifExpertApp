import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    //* HOOKS

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        // console.log(event.target.value);
        setInputValue(event.target.value);
    };

    const hanldeSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {

            setCategories(categories => [ inputValue,...categories]);
            setInputValue('');
        }



    };

    return (
        <form onSubmit={hanldeSubmit}>
            <h1>{inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}




