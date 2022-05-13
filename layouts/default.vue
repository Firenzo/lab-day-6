<template>
  <div id="app">
    <div class="wrap">
      <h1>Dit is de default layout</h1>
      <Nuxt />
    </div>
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

<style lang="scss">
@use "styles/main" as *;
#app {
  width: 1000px;
  margin: auto;
}
h1 {
  font-family: sans-serif;
}
</style>
