import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories([ HunterXHunter, ...categories ])
    //     // setCategories( cats => [...cats, 'HunterXHunter']); //El set categories puede tener un callback, donde el primer argumento
    //                                                      // es el valor del estado anterior y luego retorna el nuevo estaado
    // }

    return (
        <>  
            <h2 className="gifExpertApp">Gifs App</h2>
            <AddCategory setCategories={ setCategories} />
            <hr />

        {/* <button onClick={handleAdd}>Agregar</button> */}

        <ol>
            {
                categories.map( category => (
                     <GifGrid
                     key={ category } 
                     category={ category } 
                     />
                    // El map debe tener un key paraa cada item del array
               
                 ))
            }
        </ol>

        </>
    )
}

