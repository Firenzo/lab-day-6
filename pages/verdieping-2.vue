<template>
    <div class="overlay">
      <NuxtLink class="button" to="academy-1"></NuxtLink>
      <NuxtLink class="up" to="verdieping-3"></NuxtLink>
      <NuxtLink class="down" to="verdieping-1"></NuxtLink>
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
  background: url("../assets/pictures/verdieping-2.jpg") no-repeat;
  width: 1000px;
  height: 1333px;
  z-index: 10;
  position: absolute;
  font-family: sans-serif;
}
.button {
  position: relative;
  top: 20px;
  left: 300px;
  display: block;
  background-color: transparent;
  width: 500px;
  height: 1230px;
  border: 4px solid #630e9e;
  &:hover {
    border-color: #0070ae;
  }
}

.up {
  position: absolute;
  display: block;
  top: 200px;
  left: 100px;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid #630e9e;
    &:hover {
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-bottom: 100px solid #0070ae;
  }
}

.down {
  position: absolute;
  display: block;
  top: 400px;
  left: 100px;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 100px solid #630e9e;
    &:hover {
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-top: 100px solid #0070ae;
  }
}

</style>
