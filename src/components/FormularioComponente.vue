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
        <input type="text" id="fechaNacimiento" v-model="fechaNacimiento" required>
      </div>
      <div class="form-group">
        <label for="id">ID:</label>
        <input type="number" id="id" v-model="id" >
      </div>
      <button type="submit" @click="buscar()">Consultar</button>
  
      <button type="submit" @click="guardar()">Guardar</button>
    </form>
  </div>
</template>

<script>
import { obtenerPorIdFachada,insertarFachada } from '../client/PersonaCliente';

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
      const data= await obtenerPorIdFachada(this.id); //aqui si debemos esperar a que la promesa se resuelva
      this.nombre=data.nombre;
      this.apellido=data.apellido;
      this.fechaNacimiento=data.fechaNacimiento;
    },
    async guardar (){
      const bodyPersona = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento
      };
      await insertarFachada(bodyPersona);
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