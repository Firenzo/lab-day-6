<template>
    <div class="overlay">
      <NuxtLink class="button" to="page3"></NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style lang="scss">
@use "styles/main" as *;
.overlay {
  background: url("../assets/pictures/pasje.jpg") no-repeat;
  width: 1000px;
  height: 1333px;
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
