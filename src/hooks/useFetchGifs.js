import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

// Esto sirve para realizar la peticion fetch e indicar cuando esta cargando y cuando termino la carga

// Cuando se actualice el useFetchGifs tenemos este estado que va a estar cargando por defecto
export const useFetchGifs = (category) => {
   
    const [state, setState] =  useState({
        data: [],   
        loading: true
    });

    useEffect( () => {

        getGifs(category)
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false            
                });
            })
            
    }, [category])
     // mando esta informacion de category para que el use Efeect sepa cuando cambia de estado y renderice

    // setTimeout( () => { 
    //   setState({  data: [1,2,3,4,5],
    //     loading: false,
    // })
    // }, 3000);

    
        return state;   // { retorna data[] y loading: true }
    }
