<template>
  <div id="app">
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

<style lang="scss">
@use "styles/main" as *;
#app {
  position: relative;
  width: 1500px;
  margin: auto;
}
h1 {
  font-family: sans-serif;
}
</style>
