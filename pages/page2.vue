<template>
    <div class="overlay">
    
      <button>Klik hier</button>
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
  background: url("../assets/images/background-living.png") no-repeat;
  width: 1000px;
  height: 1000px;
  /* opacity: 0; */
  z-index: 10;
  position: absolute;
  font-family: sans-serif;
}
</style>
