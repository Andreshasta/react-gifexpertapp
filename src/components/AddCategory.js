
import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');//si el useState se deja vacio, el inputValue será undefined, lo que puede causar problemas al intentar mostrarlo en pantalla o al intentar usarlo para agregar una nueva categoría. Al inicializar el useState con un string vacio, se asegura que el inputValue siempre tenga un valor definido, lo que facilita su uso en el componente y evita errores relacionados con valores undefined.
    //El inputValue será el último valor renderizado que la persona escribió.
    const handleInputChange = (e) =>{
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if ( inputValue.trim().length > 2){
            //console.log('submit Realizado');
            //setCategories( cat=>[...cat, inputValue]);
            setCategories( cat=>[inputValue, ...cat]);//ahora se inserta la nueva categoria al principio del arreglo, lo que hace que se muestre primero en la lista de categorías. Esto se logra usando el operador spread para copiar las categorías existentes en el nuevo arreglo, y luego agregando la nueva categoría al principio del arreglo. De esta manera, cada vez que se agrega una nueva categoría, esta se muestra al principio de la lista, lo que mejora la experiencia del usuario al mostrar las categorías más recientes primero.
            setInputValue('');
        }
        
    }

//El <form></form> agrupa a todos los elementos que se envían al servidor, por lo tanto, no se usa el Fragment
    return (


        
        <form onSubmit={handleSubmit}>
            <h1>  { inputValue } </h1>        
            <input
                type="text"
                value = { inputValue }
                onChange={handleInputChange}
                    
            />
        </form>
    
  )
}
//Los proptypes son una forma de enviar información de un componente padre a un componente hijo, es decir, son una forma de comunicación entre componentes. En este caso, se está enviando la función setCategories desde el componente GifExpertApp al componente AddCategory para que este último pueda modificar el estado de las categorías en el componente padre. Esto se hace para permitir que el componente AddCategory pueda agregar nuevas categorías a la lista de categorías que se muestra en el componente GifExpertApp.
//Actualmente los proptypes ya no se soportan en React 19, por lo que se recomienda usar TypeScript para definir los tipos de las propiedades de los componentes.

 //tarea: hace que setCategories sea obligatorio en el componente AddCategory, es decir, que si no se envía la función setCategories desde el componente GifExpertApp al componente AddCategory, se muestre un error en la consola. Para esto se puede usar PropTypes, que es una forma de validar las propiedades de los componentes en React. Para esto se debe importar PropTypes y luego definir las propTypes del componente AddCategory, donde se especifica que setCategories es una función y es obligatoria. De esta manera, si no se envía la función setCategories desde el componente GifExpertApp al componente AddCategory, se mostrará un error en la consola indicando que la propiedad setCategories es requerida y debe ser una función. Como el uso de propTypes ya no se soporta, se usará TypeScript para definir los tipos de las propiedades de los componentes, lo que permite una validación más robusta y una mejor experiencia de desarrollo.

/*
Como prop-types ya no es soportado por la versión 19 de React, se debe instalar manualmente en el proyecto
npm install prop-types
*/
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}