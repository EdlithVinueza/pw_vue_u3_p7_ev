<template>
    
    <div v-if="pokemonObjeto!=null">
        <h1>Adivina el pokemon de la imagen</h1>
        <PokemonImagen :pokemonId="pokemonObjeto.id" :showPokemon="pokemonShow" />
    <PokemonOpciones :pokemons="pokemonsArr" />
  
    </div>
    
</template>

<script>
import PokemonImagen from '@/components/PokemonImagen.vue'
import PokemonOpciones from '@/components/PokemonOpciones.vue'
import {consultarPokemosFachada,obtenerAleatorioFachada } from '@/client/PokemonClient.js'
export default {
    components: {
        PokemonImagen,
        PokemonOpciones
    },
    data(){
        return {
            pokemonsArr: [],
            pokemonObjeto: null,
            pokemonShow: true
        }
    },
    mounted(){
        console.log('Se monto en la pagina el componente PokemonImagen.vue')
        this.cargarJuego()
    },
    methods:{
        async cargarJuego(){
            const arragloPokemons = await consultarPokemosFachada()
            console.log(arragloPokemons)
            this.pokemonsArr = arragloPokemons

            const valorAleatorio =  obtenerAleatorioFachada(0,3)
            console.log(valorAleatorio)
            const pokemonCorrecto = this.pokemonsArr[valorAleatorio]
            this.pokemonObjeto = pokemonCorrecto
           
        }
    },
   

}
</script>

<style>

</style>