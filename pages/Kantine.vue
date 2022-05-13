<template>
  <div class="overlay">
    <NuxtLink class="button" to="koffie-lekker"></NuxtLink>
  </div>
</template>

<script>
export default {
  name: "KantinePage",
};
</script>

<style lang="scss" scoped>
@use "styles/main" as *;
.overlay {
  background: url("../assets/pictures/koffiecorner.jpg") no-repeat;
  width: 1000px;
  height: 740px;
  z-index: 10;
  position: absolute;
  font-family: sans-serif;
}
.button {
  position: relative;
  top: 200px;
  left: 150px;
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
