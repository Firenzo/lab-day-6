<template>
    <div class="overlay">
      <NuxtLink class="button1" to="kantine"></NuxtLink>
      <NuxtLink class="button2" to="academy-1"></NuxtLink>
      <NuxtLink class="button3" to="dcx"></NuxtLink>
      <NuxtLink class="button4" to="forbidden"></NuxtLink>
    </div>
</template>

<script>
export default {
  name: "LiftPage",
};
</script>

<style lang="scss" scoped>
@use "styles/main" as *;
.overlay {
  background: url("../assets/pictures/lift-1.jpg") no-repeat;
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
.button2 {
  position: relative;
    top: 440px;
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
.button3 {
  position: relative;
    top: 250px;
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
.button4 {
  position: relative;
    top: 30px;
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
