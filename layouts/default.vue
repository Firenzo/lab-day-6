<template>
  <div id="app">
    <div class="objective">
      <h2 v-if="$store.state.chosenCharacter">{{$store.state.objectives[$store.state.currentObjective -1].title}}</h2>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "lab-day-6",
    };
  },

  data: () => ({}),

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@use "styles/main" as *;
#app {
  position: relative;
  width: 1500px;
  margin: auto;
}
h1 {
  font-family: sans-serif;
}

h2{
  font-family: sans-serif;
}
</style>
