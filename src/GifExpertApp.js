import React, { useState   } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {    

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];


    //const [categories, setCategories] =useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const [categories, setCategories] =useState(['One Punch']);
/*
    const handleAdd = () =>{
        setCategories( categories => [...categories, 'HunterXHunter']); 
        //aquí se mostrará un error por consola porque permite agregar varios elementos 'HunterXHunter'la key de los elementos 'HunterXHunter' es  la misma para todos los elementos que se agreguen de este tipo.
    }*/

//El map pot defecto recibe por lo general dos argumentos, el primero es el elemento del arreglo y el segundo es el indice. Se puede omitir el segundo argumento si no se va a usar, pero en este caso lo vamos a usar para asignar una key a cada elemento del arreglo que se renderiza. La key es un atributo especial que le dice a React que un elemento en particular ha cambiado, agregado o eliminado. Esto ayuda a React a identificar qué elementos han cambiado y a renderizar solo los elementos que han cambiado, en lugar de renderizar toda la lista cada vez que se actualiza.
//como cada uno de los elementos del .map debe tener una key unica, se puede usar el indice del elemento como key, pero esto no es recomendable ya que si el orden de los elementos cambia, las keys tambien cambian y esto puede causar problemas de rendimiento. En este caso, como cada categoria es unica, se puede usar la categoria como key. Esta key viene del uso de .map, que es una función de los arreglos que permite iterar sobre cada elemento del arreglo y retornar un nuevo arreglo con los elementos transformados. En este caso, se esta retornando un nuevo arreglo de elementos li, donde cada elemento li tiene como key la categoria y como contenido el indice y la palabra Hola. La key es un atributo especial que le dice a React que un elemento en particular ha cambiado, agregado o eliminado. Esto ayuda a React a identificar qué elementos han cambiado y a renderizar solo los elementos que han cambiado, en lugar de renderizar toda la lista cada vez que se actualiza.
//Hay que asegurarse de no tener duplicados en las keys, ya que esto puede causar problemas de rendimiento y errores en la renderizacion. En este caso, como cada categoria es unica, se puede usar la categoria como key. Si se usara el indice como key, y se agregara una nueva categoria al principio del arreglo, todas las keys cambiarian y esto causaria que React renderizara toda la lista nuevamente, lo cual no es eficiente. En cambio, si se usa la categoria como key, solo se renderizaria el nuevo elemento agregado, lo cual es mucho mas eficiente.

//con setCategories definido al lado de AddCategory se envía la función para  permmitir comunicar los comoponentes GifExpertApp y AddCategory.
    return(   
       <>
            <h2>GifExpertApp</h2>
            

            <AddCategory setCategories={setCategories}/>
            <hr />
            {/*<button onClick={ handleAdd }>Agregar</button>*/}
            {/*El botón se usó para agregar 'HunterXHunter'  */}
            
            <ol>
                {
                    categories.map( (category, i) =>{
                        return <li key={ category }> {category}</li>;
                    })
                }
            </ol>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key = { category }
                            category={ category}
                        />
                    ))
                }
            </ol>


        </>

    )

    };


    



export default GifExpertApp;