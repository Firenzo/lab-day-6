<template>
    <div class="overlay">
    <img
      class="char__pic"
      :src="
        require(`~/assets/images/characters/Firenzo.png`)
      "
    />
      <NuxtLink class="button" to="lobby"></NuxtLink>
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
  background: url("../assets/pictures/pasje.jpg") no-repeat;
  width: 1000px;
  height: 1333px;
  z-index: 10;
  position: absolute;
  font-family: sans-serif;
}
.char__pic {
  position: relative;
    top: 510px;
    left: 340px;
}
.button {
  position: relative;
    top: 120px;
    left: 230px;
    display: block;
    background-color: transparent;
    width: 600px;
    height: 400px;
    border: 4px solid #630e9e;

    &:hover {
      border-color: #0070ae;
    }
}

</style>
