<template>
  <div class="opcions-container">
    <ul>
      <li>Opion 1</li>
      <li>Opion 2</li>
      <li>Opion 3</li>
      <li>Opion 4</li>
    </ul>
  </div>
</template>

<script>
export default {

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