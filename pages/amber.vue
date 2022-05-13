<template>
  <div class="overlay">
    <NuxtLink class="back" to="dcx-3"></NuxtLink>
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
  background: url("../assets/pictures/amber.jpg") no-repeat;
  width: 1000px;
  height: 1333px;
  z-index: 10;
  position: absolute;
  font-family: sans-serif;
}
.back {
  position: absolute;
  display: block;
  top: 500px;
  left: 50px;
  width: 0;
  height: 0;
  border-right: 100px solid #630e9e;
  border-bottom: 50px solid transparent;
  border-top: 50px solid transparent;
  &:hover {
    border-right: 100px solid #0070ae;
    border-bottom: 50px solid transparent;
    border-top: 50px solid transparent;
  }
}
.button {
  position: relative;
  top: 540px;
  left: 570px;
  display: block;
  background-color: transparent;
  width: 50px;
  height: 80px;
  border: 4px solid #630e9e;

  &:hover {
    border-color: #0070ae;
  }
}
</style>
