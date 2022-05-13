<template>
    <div class="overlay">
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
  background: url("../assets/pictures/koffiecorner.jpg") no-repeat;
  width: 1500px;
  height: 1125px;
  z-index: 10;
  position: absolute;
  font-family: sans-serif;
}
</style>
