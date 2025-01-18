<template>
  <div class="opcions-container">
    <ul>
      <li @click="seleccionado" v-for="pokemon in pokemons" :key="pokemon.id">{{pokemon.nombre}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  methods:{
    seleccionado(){
      console.log('Hizo Click')
    }
  }

}
</script>

<style>

.opcions-container{
  display: flex;
  justify-content: center;
}

ul{
  list-style-type: none;
}

li{
  background-color: white;
  width: 250px;
  border: 1px solid ;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}

li:hover{
  background-color: rgb(0, 0, 0,0.05);
}
</style>