<template>
  <div class="opcions-container">
    <ul>
      <li @click="seleccionado(pokemon.id)" v-for="pokemon in pokemons" :key="pokemon.id">{{pokemon.nombre}}</li>
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
  data(){
        return {
            pokemonsArr: [],
            pokemonObjeto: null,
            pokemonShow: true,
            mostrarComponenteOpciones: true
        }
    },
  methods:{
    seleccionado(id){
      console.log('Hizo Click')
      console.log(id)
      const objetoEnviado={
        identificador:id,
        valor2:false,
        valor3:'Ejemplo2'
      }
      this.$emit('seleccion',objetoEnviado)//generamos el evento en el hijo y le ponemos un nombre, y el parametro que le queremos poner al padre
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