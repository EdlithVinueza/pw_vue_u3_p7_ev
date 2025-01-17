<template>
    <h1>Adivina el pokemon de la imagen</h1>
    <PokemonImagen :pokemonId="77" :showPokemon="false" />
    <PokemonOpciones />
  
</template>

<script>
import PokemonImagen from '@/components/PokemonImagen.vue'
import PokemonOpciones from '@/components/PokemonOpciones.vue'
export default {
    components: {
        PokemonImagen,
        PokemonOpciones
    }

}
</script>

<style>

</style>