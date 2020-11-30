// import React, { useEffect, useState } from 'react'

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    //* Custom HOOK'S

    const {data:images ,loading}= useFetchGifs(category);

    return (
        <>

            <h2>{category}</h2>
            {/* {loading ? 'Cargando....' : 'Cargado' } */}
            {loading && <p>loading</p>}
            <div className="card-grid">

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }


            </div>

        </>
    )
}
