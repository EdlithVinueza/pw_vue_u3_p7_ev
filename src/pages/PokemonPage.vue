<template>
    
    <div v-if="pokemonObjeto!=null">
        <h1>Adivina el pokemon de la imagen</h1>
        <Puntuacion :intentos="intentos" :puntuacion="puntuacion" />
        <PokemonImagen ref="miHijo" :pokemonId="pokemonObjeto.id" :showPokemon="pokemonShow" />
        <PokemonOpciones v-show="mostrarComponenteOpciones" @seleccion="validarRespuesta($event)" :pokemons="pokemonsArr" /> <!--Aqui atrapamol el evento emit-->
        <MensajeResultado v-show="!mostrarComponenteOpciones" :mensaje="mensajeResultado" :tipoMensaje="tipoMensaje" @jugarDeNuevo="reinicarJuego" />
    </div>
    
</template>

<script>
import Puntuacion from '@/components/Puntuacion.vue';
import PokemonImagen from '@/components/PokemonImagen.vue'
import PokemonOpciones from '@/components/PokemonOpciones.vue'
import MensajeResultado from '@/components/MensajeResultado.vue'
import {consultarPokemosFachada,obtenerAleatorioFachada } from '@/client/PokemonClient.js'
export default {
    components: {
        PokemonImagen,
        PokemonOpciones,
        Puntuacion,
        MensajeResultado
    },
    data(){
        return {
            pokemonsArr: [],
            pokemonObjeto: null,
            pokemonShow: true,
            mostrarComponenteOpciones: true,
            intentos: 0,
            puntuacion: 0,
            mensajeResultado: '',
            tipoMensaje: ''
            
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
            this.intentos++
            const idSelecionado = valor.identificador
            if(idSelecionado == this.pokemonObjeto.id){
                console.log('Selecciono el Pokemon Correcto')
                if(this.intentos == 1){
                    this.puntuacion = 100
                }
                else if(this.intentos == 2){
                    this.puntuacion = 50
                }
                else if(this.intentos == 3){
                    this.puntuacion = 25
                }
                
                this.pokemonShow = valor.valor2
                this.mostrarComponenteOpciones = false
                this.mensajeResultado = '¡Correcto!';
                this.tipoMensaje = 'corecto';
            }
            else{
                console.error('Error .....')
                this.pokemonShow = true
                if (this.intentos >= 3) {
                    this.mostrarComponenteOpciones = false;
                    this.mensajeResultado = 'Game Over! Se acabaron los intentos.';
                    this.tipoMensaje = 'error';
                }
            }
            const valorHijo = this.$refs.miHijo //Aqui podemos aceder a los valores del hijo
            console.log('Valor obtenido del REFS') //Esto esta diseñado parahacer pruebas, no es recomendable hacerlo siempre
            console.log(valorHijo)
            console.log(this.$refs.miHijo.propuedadPrueba)
            this.$refs.miHijo.metodoPrueba()
            
            
        },
        reinicarJuego(){
            this.intentos = 0
            this.puntuacion = 0
            this.mensajeResultado = ''
            this.mostrarComponenteOpciones = true
            this.cargarJuego()
        }
    },
   

}
</script>

<style>

</style>