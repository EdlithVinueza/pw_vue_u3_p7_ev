<template>
    <div>
        <p>Intentos:  {{ intentos }}</p>
        <p>Puntuacion:  {{ puntuacion }}</p>
    </div>

</template>

<script>
export default{
    name: 'Puntuacion',
    props: {
        intentos: {
            type: Number,
            required: true
        },
        puntuacion: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>

</style>