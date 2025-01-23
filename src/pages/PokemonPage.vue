<template>
    
    <div v-if="pokemonObjeto!=null">
        <h1>Adivina el pokemon de la imagen</h1>
        <PokemonImagen ref="miHijo" :pokemonId="pokemonObjeto.id" :showPokemon="pokemonShow" />
        <PokemonOpciones v-show="mostrarComponenteOpciones" @seleccion="validarRespuesta($event)" :pokemons="pokemonsArr" /> <!--Aqui atrapamol el evento emit-->
  
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
            pokemonShow: true,
            mostrarComponenteOpciones: true
        }
    },
    mounted(){
        console.log('Se monto en la pagina el componente PokemonImagen.vue')
        this.cargarJuego()
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('beforeMount')
    },
    update(){
        console.log('update')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
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
           
        },
        validarRespuesta(valor){
            console.log('Llego el evento al padre')
            console.log(valor)
            const idSelecionado = valor.identificador
            if(idSelecionado == this.pokemonObjeto.id){
                console.log('Selecciono el Pokemon Correcto')
                

                this.pokemonShow = valor.valor2
                this.mostrarComponenteOpciones = false
            }
            else{
                console.error('Error .....')
                this.pokemonShow = true
            }
            const valorHijo = this.$refs.miHijo //Aqui podemos aceder a los valores del hijo
            console.log('Valor obtenido del REFS') //Esto esta diseñado parahacer pruebas, no es recomendable hacerlo siempre
            console.log(valorHijo)
            console.log(this.$refs.miHijo.propuedadPrueba)
            this.$refs.miHijo.metodoPrueba()
            
            
        },
    },
   

}
</script>

<style>

</style>