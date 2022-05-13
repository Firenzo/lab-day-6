<template>
  <div class="overlay"></div>
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
</style>
