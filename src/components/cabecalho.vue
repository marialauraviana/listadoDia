<template>

  <header> 
      <h1> {{ valor }} </h1>
  </header>

</template>

<script>
export default {
  props: ["valor"],
};
</script>
  
<style>
header {
  background-color: #B0C4DE;
  display: flex;
  height: 50px;
  width: 100%;
  text-align: center;
  
}

h1 {
  margin: auto;
  color: black;
}


</style>