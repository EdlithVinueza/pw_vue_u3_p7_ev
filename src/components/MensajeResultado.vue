<template>
    <div :class="tipoMensaje">
        <p>{{ mensaje }}</p>
        <button @click="juegarDeNuevo">Jugar de Nuevo</button>
    </div>

</template>

<script>
export default{

    props: {
        mensaje: {
            type: String,
            required: true
        },
        tipoMensaje: {
            type: String,
            required: true
        }
    },
    methods:{
        juegarDeNuevo(){
            console.log('Mostrar Mensaje')
            this.$emit('jugarDeNuevo')
        }
    }

}


</script>


<style>

.corecto{
    background-color: green;
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
}
.error{
    background-color: red;
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
}
</style>