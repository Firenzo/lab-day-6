<template>
    <div class="overlay">
      <NuxtLink class="button" to=""></NuxtLink>
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
  background: url("../assets/pictures/kanitne-4.jpg") no-repeat;
  width: 1500px;
  height: 1125px;
  z-index: 10;
  position: absolute;
  font-family: sans-serif;
}
.button1 {
  position: relative;
    top: 630px;
    left: 510px;
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
