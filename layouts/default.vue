<template>
  <div id="app">
    <h1>Dit is de default layout</h1>
    <Nuxt />
  </div>
</template>

<script>
export default {

  head () {
    return {
      title: 'lab-day-6',
    }
  },

  data: () => ({

  }),

  computed: {

  },

  mounted () {

  },

  methods: {

  }
}

</script>

<style lang="scss">
@use 'styles/main' as *;
  h1{
      font-family: sans-serif ;
  }
</style>
