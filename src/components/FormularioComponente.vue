<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" required>
      </div>
      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" v-model="apellido" required>
      </div>
      <div class="form-group">
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input type="datetime-local" id="fechaNacimiento" v-model="fechaNacimiento" required>
      </div>
      <div class="form-group">
        <label for="id">ID:</label>
        <input type="number" id="id" v-model="id" >
      </div>
      <button type="submit" @click="buscar()">Consultar</button>
      <button type="submit" @click="guardar()">Guardar</button>
      <button type="submit" @click="actualizar()">Actualizar</button>
      <button type="submit" @click="actualizarParcial()">Actualización Parcial</button>
      <button type="submit" @click="eliminar()">Eliminar</button>
    </form>
  </div>
</template>

<script>
import { obtenerPorIdFachada, insertarFachada, actualizarFachada, actualizarParcialFachada, eliminarFachada } from '../client/PersonaCliente';

export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
      id: ''
    };
  },
  methods: {
    submitForm() {
      //Para ver los datos ingresados en el formulario
      console.log('Nombre:', this.nombre);
      console.log('Apellido:', this.apellido);
      console.log('Fecha de Nacimiento:', this.fechaNacimiento);
      console.log('ID:', this.id);
    },
    async buscar(){
      try {
        const data = await obtenerPorIdFachada(this.id); //aqui si debemos esperar a que la promesa se resuelva
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.fechaNacimiento = data.fechaNacimiento;
      } catch (error) {
        console.error('Error al buscar:', error);
        alert('Error al buscar los datos. Por favor, intente nuevamente.');
      }
    },
    async guardar (){
      const bodyPersona = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.formatFechaNacimiento(this.fechaNacimiento)
      };
      try {
        await insertarFachada(bodyPersona);
        alert('Datos guardados exitosamente.');
      
      } catch (error) {
        console.error('Error al guardar:', error);
        alert('Error al guardar los datos. Por favor, intente nuevamente.');
      }
    },
    async actualizar() {
      const bodyPersona = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.formatFechaNacimiento(this.fechaNacimiento)
      };
      try {
        await actualizarFachada(this.id, bodyPersona);
        alert('Datos actualizados exitosamente.');
      } catch (error) {
        console.error('Error al actualizar:', error);
        alert('Error al actualizar los datos. Por favor, intente nuevamente.');
      }
    },
    async actualizarParcial() {
      const bodyPersona = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.formatFechaNacimiento(this.fechaNacimiento)
      };
      try {
        await actualizarParcialFachada(this.id, bodyPersona);
        alert('Datos actualizados parcialmente exitosamente.');
      } catch (error) {
        console.error('Error al actualizar parcialmente:', error);
        alert('Error al actualizar parcialmente los datos. Por favor, intente nuevamente.');
      }
    },
    async eliminar() {
      try {
        await eliminarFachada(this.id);
        alert('Datos eliminados exitosamente.');
      } catch (error) {
        console.error('Error al eliminar:', error);
        alert('Error al eliminar los datos. Por favor, intente nuevamente.');
      }
    },
    formatFechaNacimiento(fecha) {
      const date = new Date(fecha);
      return date.toISOString().split('.')[0]; // Formatear la fecha sin milisegundos
    }
  },
  mounted() {
    console.log('antes de llamar la API');
    obtenerPorIdFachada(3); // aqui no ponemos await porque no necesitamos esperar a que la promesa se resuelva
    // Código para ejecutar cuando el componente se monta
  }
};
</script>

<style>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  background-color: #b2ebf2;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
}

label {
  align-self: flex-start;
  color: #00796b;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #00796b;
  border-radius: 5px;
}

button {
  background-color: #00796b;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #004d40;
}
</style>