


//El helper es un archivo que contiene funciones o componentes que se pueden reutilizar en diferentes partes de la aplicación, lo que permite mantener el código más organizado y separado por responsabilidades. En este caso, se puede crear un helper llamado getGifs.js que contenga la función getGifs, lo que permite mantener el código del componente GifGrid más limpio y enfocado en la presentación de los gifs, mientras que la lógica para obtener los gifs de la API se maneja en el helper. Esto mejora la legibilidad y facilita el mantenimiento del código, ya que cada parte del código tiene una responsabilidad clara y definida.
    
export const getGifs = async(category) =>{
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


        return gifs;
        //Esta función no retorna los gifs directamente, sino que retorna una promesa que se resuelve con el arreglo de gifs, lo que permite manejar la función de manera asíncrona y obtener los gifs cuando la promesa se resuelva. Al retornar la promesa, se puede usar la función getGifs en el componente GifGrid con async/await o con .then() para obtener los gifs de manera asíncrona y renderizarlos en la aplicación.
    }