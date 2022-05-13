<template>
    <div class="overlay">
      <NuxtLink class="button" to="page3"></NuxtLink>
    </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style lang="scss" scoped>
@use "styles/main" as *;
.overlay {
  background: url("../assets/pictures/ingang.jpg") no-repeat;
  width: 1500px;
  height: 1125px;
  z-index: 10;
  position: absolute;
  font-family: sans-serif;
}
.button {
  position: relative;
    top: 630px;
    left: 850px;
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
