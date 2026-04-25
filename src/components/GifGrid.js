

//Ahora se usará un custom hook
import React, { use } from 'react';
//import React, { useState,useEffect } from 'react';//El uso de useEffect es para ejecutar una función cada vez que el componente se renderiza, lo que permite realizar tareas como obtener datos de una API, actualizar el título del documento, etc. En este caso, se puede usar useEffect para obtener los gifs de la API cada vez que se renderiza el componente GifGrid, lo que permite mostrar los gifs correspondientes a la categoría seleccionada.Si no se usa useEffect, la función getGifs se ejecutará cada vez que se renderice el componente, lo que puede causar problemas de rendimiento y generar un bucle infinito de renderizados. Al usar useEffect, se puede controlar cuándo se ejecuta la función getGifs, por ejemplo, solo cuando la categoría cambia, lo que mejora el rendimiento y evita problemas de renderizado.
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category }) => {

    //const [count,setCount] =useState(0);//ejemplo usado para el contador



   


  /*  
    const [images,setImages] =useState([]);

    useEffect(() =>{
        //getGifs(); //Esta función ahora se define en el helper getGifs.js para mantener el código más organizado y separado por responsabilidades, lo que mejora la legibilidad y facilita el mantenimiento del código. Al tener la función getGifs en un archivo separado, se puede reutilizar en otros componentes si es necesario, lo que evita la duplicación de código y mejora la eficiencia del desarrollo. Además, al tener la función getGifs en un archivo separado, se puede realizar pruebas unitarias de manera más fácil y efectiva, lo que mejora la calidad del código y reduce la posibilidad de errores.

        getGifs(category)
            .then(setImages);//es lo mismo que escribir .then(gifs => setImages(gifs)), ya que el resultado de la función getGifs es un arreglo de gifs, lo que permite actualizar el estado de images con el arreglo de gifs obtenido de la API. Al usar .then(setImages), se está pasando la función setImages como callback para manejar el resultado de la promesa devuelta por getGifs, lo que hace que el código sea más conciso y fácil de leer.
    }, [category]);//El segundo argumento del useEffect es un arreglo de dependencias, que indica cuándo se debe ejecutar la función que se pasa como primer argumento. En este caso, se pasa el arreglo [category], lo que significa que la función getGifs se ejecutará cada vez que la categoría cambie. Esto es importante porque cada vez que se selecciona una nueva categoría, se deben obtener los gifs correspondientes a esa categoría, por lo que es necesario ejecutar la función getGifs cada vez que la categoría cambie. Si no se pasara el arreglo de dependencias, la función getGifs se ejecutaría cada vez que el componente se renderice, lo que puede causar problemas de rendimiento y generar un bucle infinito de renderizados.Si se pasa un arreglo vacío como segundo argumento, la función getGifs se ejecutará solo una vez, cuando el componente se monte por primera vez, lo que no es lo que se desea en este caso, ya que se necesitan obtener los gifs cada vez que se selecciona una nueva categoría.


    */


     //Ahora se usará un custom hook para obtener los gifs de la API, lo que permite mantener el código más organizado y separado por responsabilidades, lo que mejora la legibilidad y facilita el mantenimiento del código. Al tener la lógica para obtener los gifs en un custom hook, se puede reutilizar en otros componentes si es necesario, lo que evita la duplicación de código y mejora la eficiencia del desarrollo. Además, al tener la lógica para obtener los gifs en un custom hook, se puede realizar pruebas unitarias de manera más fácil y efectiva, lo que mejora la calidad del código y reduce la posibilidad de errores.Custom Hooks: Es una forma de extraer lógica de un componente de manera que sea sencillo reutilizarla nuevamente en otros componentes. Un custom hook es una función que utiliza otros hooks de React para encapsular lógica relacionada con el estado, efectos secundarios, etc. En este caso, se puede crear un custom hook llamado useFetchGifs que contenga la lógica para obtener los gifs de la API, lo que permite mantener el código del componente GifGrid más limpio y enfocado en la presentación de los gifs, mientras que la lógica para obtener los gifs de la API se maneja en el custom hook. Esto mejora la legibilidad y facilita el mantenimiento del código, ya que cada parte del código tiene una responsabilidad clara y definida. Además, al tener la lógica para obtener los gifs en un custom hook, se puede realizar pruebas unitarias de manera más fácil y efectiva, lo que mejora la calidad del código y reduce la posibilidad de errores.

    //const state = useFetchGifs();
    const {data:images, loading} = useFetchGifs( category );//desestructurando el objeto y enviando como argumento la categoría. data:images es para renombrar la propiedad data a images. 
    //console.log(state);
    //console.log(data);
    // console.log(loading);
     

    //El encodeURI se usa para codificar la categoría en la URL de la API, lo que permite manejar caracteres especiales y espacios en la categoría sin causar problemas en la URL. Al usar encodeURI, se asegura que la categoría se codifique correctamente en la URL, lo que permite obtener los gifs correspondientes a esa categoría sin problemas. Si no se usara encodeURI, podría haber problemas al manejar categorías con caracteres especiales o espacios, lo que podría resultar en una URL inválida y no obtener los gifs correspondientes a esa categoría.

/*
//Lan función getGifs ahora se definirá en el helper getGifs.js para mantener el código más organizado y separado por responsabilidades, lo que mejora la legibilidad y facilita el mantenimiento del código. Al tener la función getGifs en un archivo separado, se puede reutilizar en otros componentes si es necesario, lo que evita la duplicación de código y mejora la eficiencia del desarrollo. Además, al tener la función getGifs en un archivo separado, se puede realizar pruebas unitarias de manera más fácil y efectiva, lo que mejora la calidad del código y reduce la posibilidad de errores.
//El helper es un archivo que contiene funciones o componentes que se pueden reutilizar en diferentes partes de la aplicación, lo que permite mantener el código más organizado y separado por responsabilidades. En este caso, se puede crear un helper llamado getGifs.js que contenga la función getGifs, lo que permite mantener el código del componente GifGrid más limpio y enfocado en la presentación de los gifs, mientras que la lógica para obtener los gifs de la API se maneja en el helper. Esto mejora la legibilidad y facilita el mantenimiento del código, ya que cada parte del código tiene una responsabilidad clara y definida.
    
    const getGifs = async() =>{
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ZkDgIL4zc8TQW6zp0VT0MIVvwOiiU7vQ`;
        const respuesta = await fetch(url);
        //const data = await respuesta.json();
        //usando desestructuración para obtener solo la data del objeto que devuelve la respuesta de la API, ya que la respuesta de la API tiene una estructura que incluye un objeto llamado data que contiene los gifs, y otros objetos como pagination y meta que no son necesarios para este caso.
        const { data } = await respuesta.json();
        
        const gifs = data.map(img =>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url//el signo de interrogación después de images es para evitar un error en caso de que el objeto images no exista, ya que si se intenta acceder a una propiedad de un objeto que no existe, se genera un error. Con el signo de interrogación, si el objeto images no existe, simplemente se devuelve undefined en lugar de generar un error, lo que permite que el código continúe ejecutándose sin problemas.
                
            }
        });
        console.log(data);
        setImages(gifs);
    }


*/


    //getGifs();//Ahora se usará en el useEffect para evitar que se ejecute cada vez que se renderiza el componente, lo que puede causar problemas de rendimiento y generar un bucle infinito de renderizados. Al usar useEffect, se puede controlar cuándo se ejecuta la función getGifs, por ejemplo, solo cuando la categoría cambia, lo que mejora el rendimiento y evita problemas de renderizado.
    //cuando no se usa las llaves en la función anónima y se usa paréntesis se tiene un return implícito, lo que significa que el valor que se devuelve es el resultado de la expresión que se encuentra dentro de los paréntesis. En este caso, se está devolviendo un objeto con las propiedades id, title y url, lo que permite crear un nuevo arreglo de gifs con solo las propiedades necesarias para mostrar en la aplicación. Si se usaran llaves en lugar de paréntesis, se tendría que usar la palabra return para devolver el objeto, lo que haría el código más verboso y menos legible. Al usar paréntesis, se puede escribir el código de manera más concisa y clara, lo que mejora la legibilidad y facilita la comprensión del código.

/*Antes del custom hook

<div className="card-grid">

                {images.map(img => (
                
                    <GifGridItem 
                        key={img.id}                    

                        {...img}

                    />
                ))}


            </div>
        </>

        */
    return (
        <>

            <h3>{ category }</h3>
            {/* <div className="card-grid"> */}
                {/*images.map(({id, title}) => (
                    <li key={id}><h4>{title}</h4>
                    <img src={img.url} alt={img.title} />}
                    </li>*/}
                {/* {images.map(img => ( */}
                
                    {/* <GifGridItem  */}
                        {/* key={img.id}                     */}
                        {/* //img ={img} */}
                        {/* {...img}//el operador spread se usa para pasar todas las propiedades del objeto img como props al componente GifGridItem, lo que permite acceder a las propiedades id, title y url directamente en el componente GifGridItem sin tener que acceder a ellas a través de un objeto img. Esto hace que el código sea más limpio y fácil de leer, ya que no es necesario escribir img.id, img.title, etc. en el componente GifGridItem, sino que se puede acceder a estas propiedades directamente como props. Además, el operador spread también permite pasar solo las propiedades necesarias al componente GifGridItem, lo que mejora el rendimiento y evita pasar props innecesarias al componente. */}

                    {/* /> */}
                {/* ))} */}
                
                {/*<h3>{count}</h3>*/}
                {/*<button onClick={()=>setCount(count+1)}></button>*/}

            {/* </div> */}
            {/* {loading ? 'Cargando...' : 'Data cargada...'} */}
            {loading && <p className="animate__animated animate__shakeY ">Cargando...</p>}
                
            <div className="card-grid">
                    
                    {
                        images.map(img =>(
                            
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
