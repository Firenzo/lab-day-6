<template>
  <div class="overlay">
    <NuxtLink class="button" to="koffie-slecht"></NuxtLink>
    <NuxtLink class="forward" to="dcx-3"></NuxtLink>
  </div>
</template>

<script>
export default {
  name: "DcxPage",
};
</script>

<style lang="scss" scoped>
@use "styles/main" as *;
.overlay {
  background: url("../assets/pictures/dcx-koffie.jpg") no-repeat;
  width: 1000px;
  height: 1333px;
  z-index: 10;
  position: absolute;
  font-family: sans-serif;
}
.forward {
  position: absolute;
  display: block;
  top: 500px;
  left: 850px;
  width: 0;
  height: 0;
  border-left: 100px solid #630e9e;
  border-bottom: 50px solid transparent;
  border-top: 50px solid transparent;
  &:hover {
    border-left: 100px solid #0070ae;
    border-bottom: 50px solid transparent;
    border-top: 50px solid transparent;
  }
}
.button {
  position: relative;
  top: 250px;
  left: 200px;
  display: block;
  background-color: transparent;
  width: 400px;
  height: 300px;
  border: 4px solid #630e9e;

  &:hover {
    border-color: #0070ae;
  }
}
</style>
