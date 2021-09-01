<template>

  <footer> 
    <h1> {{ mensagem }} </h1> 
  </footer>

</template>

<script>
export default {
  props: ["mensagem"],
};
</script>

<style scoped>
footer{
  background-color: #B0C4DE;
  height: 50px;
  width: 100%;
  position: fixed;
  bottom:0px;
  display: flex;
}
h1 {
  
  margin: auto;
  color: black;
  text-align: center;
}

</style>