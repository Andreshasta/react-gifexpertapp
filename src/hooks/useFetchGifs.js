

//el uso de la palabra 'use' al inicio del nombre de un hook es una convención que se sigue en React para indicar que se trata de un hook personalizado. Esto ayuda a diferenciar los hooks personalizados de los hooks integrados de React, como useState o useEffect, y también ayuda a identificar rápidamente que se está utilizando un hook personalizado en el código. Además, el uso de la palabra 'use' al inicio del nombre del hook también permite a los desarrolladores saber que el hook debe seguir las reglas de los hooks de React, como no ser llamado dentro de condicionales o bucles, lo que mejora la legibilidad y la mantenibilidad del código. Es una buena p´actica seguir esta convención para nombrar los hooks personalizados, ya que ayuda a mantener un código más organizado y fácil de entender.
//Los custom Hooks funcionan como si fueran 'functional components' pero no retornan un elemento JSX, sino que retornan cualquier tipo de dato, como un objeto, un arreglo, una función, etc. Esto permite encapsular lógica relacionada con el estado, efectos secundarios, etc. en una función reutilizable que puede ser utilizada en diferentes componentes de la aplicación. Al usar custom Hooks, se puede mantener el código más organizado y separado por responsabilidades, lo que mejora la legibilidad y facilita el mantenimiento del código. Además, al tener la lógica para obtener los gifs en un custom hook, se puede realizar pruebas unitarias de manera más fácil y efectiva, lo que mejora la calidad del código y reduce la posibilidad de errores.

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category) => {

    const [state, setState] = useState({
        data:[],
        loading:true
    });
    
    useEffect(()=>{
        //Aquí se establecerá el cuerpo de la petición http
        getGifs( category )
            .then(imgs =>{
                setTimeout(()=>{
                    console.log(imgs);
                    setState({
                        data:imgs,
                        loading:false
                    });
                }, 3000)
            })
    },[ category]);//se evaluará la categoría cada vez que esta cambie, lo que permite obtener los gifs correspondientes a la nueva categoría seleccionada. Al incluir category en el arreglo de dependencias, se asegura que la función getGifs se ejecute cada vez que la categoría cambie, lo que mejora la experiencia del usuario al mostrar los gifs correspondientes a la categoría seleccionada sin necesidad de recargar la página.
    // setTimeout(()=>{
    //     setState({
    //     data:[1,2,3,4,5],
    //     loading:false
    // })
    // }, 3000)
    console.log(state);
    return state; // {data:[], loading:true}

}