<template>
    <div class="overlay">
      <NuxtLink class="up" to="Kantine"></NuxtLink>
      <NuxtLink class="down" to="verdieping-3"></NuxtLink>
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
  background: url("../assets/pictures/wc-1.jpg") no-repeat;
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
  transform: rotate(-7deg);
  display: block;
  top: 600px;
  left: 280px;
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
  transform: rotate(-7deg);
  display: block;
  top: 750px;
  left: 310px;
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
