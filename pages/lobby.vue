<template>
    <div class="overlay">
      <NuxtLink class="button to-reception" to="pasje"></NuxtLink>
      <NuxtLink class="button to-stairs" to="trap"></NuxtLink>
      <NuxtLink class="button to-elevator" to="lift"></NuxtLink>
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
  background: url("../assets/pictures/receptie.jpg") no-repeat;
  width: 1000px;
  height: 1333px;
  z-index: 10;
  position: absolute;
  font-family: sans-serif;
}

.button {
  position: absolute;
    // top: 630px;
    // left: 850px;
    display: block;
    background-color: transparent;
    width: 50px;
    height: 80px;
    border: 4px solid #630e9e;

    &:hover {
      border-color: #0070ae;
    }
}

.button.to-reception {
    top: 318px;
    left: 159px;
    width: 270px;
    height: 178px;
}

.button.to-stairs {
    top: 375px;
    left: 830px;
}

.button.to-elevator {
    top: 360px;
    left: 640px;
}


</style>
