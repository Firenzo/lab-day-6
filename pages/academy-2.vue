<template>
    <div class="overlay">
      <NuxtLink class="back" to="academy-1"></NuxtLink>
    </div>
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
  background: url("../assets/pictures/academy-2.jpg") no-repeat;
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

</style>
