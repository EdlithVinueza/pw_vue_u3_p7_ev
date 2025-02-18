import axios from 'axios';

const obtenerPorId = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8081/matricula/v1.1/persona/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error obtener persona by ID:', error);
        throw error;
    }
};

export const obtenerPorIdFachada = async (id) => {
    return await obtenerPorId(id);
};

const insertar = async (body) => {
    try {
        const response = await axios.post('http://localhost:8081/matricula/v1.1/persona', body);
        return response.data;
    } catch (error) {
        console.error('Error insertar persona:', error);
        throw error;
    }
};

export const insertarFachada = async (body) => {
    return await insertar(body);
};

const actualizar = async (id, body) => {
    try {
        const response = await axios.put(`http://localhost:8081/matricula/v1.1/persona/${id}`, body);
        return response.data;
    } catch (error) {
        console.error('Error actualizar persona:', error);
        throw error;
    }
};

export const actualizarFachada = async (id, body) => {
    return await actualizar(id, body);
};

const actualizarParcial = async (id, body) => {
    try {
        const response = await axios.patch(`http://localhost:8081/matricula/v1.1/persona/${id}`, body);
        return response.data;
    } catch (error) {
        console.error('Error actualizar parcialmente persona:', error);
        throw error;
    }
};

export const actualizarParcialFachada = async (id, body) => {
    return await actualizarParcial(id, body);
};

const eliminar = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8081/matricula/v1.1/persona/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error eliminar persona:', error);
        throw error;
    }
};

export const eliminarFachada = async (id) => {
    return await eliminar(id);
};

