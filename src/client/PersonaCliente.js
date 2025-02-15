import axios from 'axios';

const obtenerPorId = async (id) =>{
    const data = axios.get(`http://localhost:8081/matricula/v1.1/persona/${id}`).then(r => r.data) //data como atributo por que no es un jso
    console.log(data)
    return data;
}

export const obtenerPorIdFachada = async (id) =>{
    return await obtenerPorId(id); //aqui debemos poner el Await, por que solo ellaxios tiene implicicito el await
}


const insertar = async (body) =>{
    axios.post('http://localhost:8081/matricula/v1.1/persona',body).then(r => r.data)
}

export const insertarFachada = async (body) =>{
    return await insertar(body);
}

const actualizar = async (id, body) =>{
    axios.put(`http://localhost:8081/matricula/v1.1/persona/${id}`,body).then(r => r.data)
}

export const actualizarFachada = async (id, body) =>{
    return await actualizar(id, body);
}


const actualizarParcial = async (id, body) =>{
    axios.patch(`http://localhost:8081/matricula/v1.1/persona/${id}`,body).then(r => r.data)
}

export const actualizarParcialFachada = async (id, body) =>{
    return await actualizarParcial(id, body);
}

const eliminar = async (id) =>{
    axios.delete(`http://localhost:8081/matricula/v1.1/persona/${id}`).then(r => r.data)
}

export const eliminarFachada = async (id) =>{
    return await eliminar(id);
}   

