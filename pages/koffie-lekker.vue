<template>
  <div class="overlay">
    <NuxtLink class="forward" to="kantine-koffie"></NuxtLink>
  </div>
</template>

<script>
export default {
  mounted(){
    if(this.$store.state.currentObjective === 3 ) {
      this.$store.dispatch('changeCurrentObjective', {currentObjective: 4});
    }
  }
};
</script>

<style lang="scss" scoped>
@use "styles/main" as *;
.overlay {
  background: url("../assets/pictures/good-coffee.gif") no-repeat;
  width: 1000px;
  height: 1333px;
  z-index: 10;
  position: absolute;
  font-family: sans-serif;
}
.forward {
  position: absolute;
  display: block;
  top: 200px;
  left: 600px;
  width: 0;
  height: 0;
  border-left: 100px solid #630e9e;
  border-bottom: 50px solid transparent;
  border-top: 50px solid transparent;
  &:hover {
    border-left: 100px solid #0070ae;
    border-bottom: 50px solid transparent;
    border-top: 50px solid transparent;
  }
}
</style>
