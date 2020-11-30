import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//* Componente GifExpertApp


//? <h2>GifExpertAPp</h2>
//? <hr />

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);


    // const handleAdd = () => {

    //     setCategories([
    //         ...categories,
    //         'hola'
    //     ]);

    // };

    return (
        <>
            <h2>GifExpertAPp</h2>
            <AddCategory setCategories={setCategories} />
            {/* <AddCategory /> */}
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>

        </>
    );
}
