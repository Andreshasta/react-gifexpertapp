import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    console.log({id, title, url});
    console.log(id, title, url);


    //se usa className en lugar de class para asignar una clase a un elemento en React, ya que class es una palabra reservada en JavaScript y no se puede usar como nombre de atributo en JSX. Al usar className, se evita el conflicto con la palabra reservada class y se permite asignar una clase CSS al elemento para aplicar estilos. En este caso, se asigna la clase 'card' al div que contiene la imagen y el título del gif, lo que permite aplicar estilos específicos a ese div a través de CSS.

    //Las clases de css pertenecen a los estilos de animate.css que se importón en el index.html
  return (
    <div className='card animate__animated animate__bounce'>
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}
