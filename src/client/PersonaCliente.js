import axios from 'axios';

const obtenerPorId = async (id) =>{
    const data = axios.get(`http://localhost:8080/matricula/v1.1/persona/${id}`).then(r => r.data) //data como atributo por que no es un jso
    console.log(data)
    return data;


}


export const obtenerPorIdFachada = async (id) =>{
    return await obtenerPorId(id); //aqui debemos poner el Await, por que solo ellaxios tiene implicicito el await
}