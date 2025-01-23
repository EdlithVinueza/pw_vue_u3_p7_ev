<template>
  <div class="pokemon-continer">
    <img v-show="showPokemon" :src="imagenFuente" alt="No se pudo cargar" class="ocultar">
    <img v-show="!showPokemon" :src="imagenFuente" alt="No se pudo cargar" class="mostrar">
  </div>

</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon:{
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      propuedadPrueba:'Este texto es de prueba'
    }
  },
  computed: {
    imagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
       }
  },
  methods: {
    metodoPrueba() {
      console.log('Este es un metodo de prueba')
    }
  }
}
</script>

<style>
.pokemon-continer {
  height: 200px;
  align-items: center;
}

.ocultar {
  filter: brightness(0);
}

img {
  height: 200px;
  width: 200px;
  position: absolute;
  right: 42%;
}
</style>