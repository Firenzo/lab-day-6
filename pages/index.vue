<template>
  <div>
    <h1>Choose your character</h1>
    <button @click="prevPerson()" class="char__button">Previous</button>
    <!-- <img :src=" true && `_nuxt/assets/images/characters/${characters[currentPerson].name}.png`"/> -->
    <img :src="require(`~/assets/images/characters/${characters[currentPerson].name}.png`)">
    <button @click="nextPerson()"  class="char__button">Next</button>
    <h2 class="char__name"></h2>
    <ul>
      <li><NuxtLink class="button" to="page2">Start</NuxtLink></li>
    </ul>
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
    currentPerson: 0,
    characters: [
      {name: "Amir", gender: "M"},
      {name: "Anna", gender: "F"},
      {name: "Anneke", gender: "F"},
      {name: "Archana", gender: "F"},
      {name: "Arjan", gender: "M"},
      {name: "Bart", gender: "M"},
      {name: "Caroline", gender: "F"},
      {name: "Daniel", gender: "M"},
      {name: "Dennis", gender: "M"},
      {name: "Eelco", gender: "M"},
      {name: "Firenzo", gender: "M"},
      {name: "Florian", gender: "M"},
      {name: "Freek", gender: "M"},
      {name: "Harald", gender: "M"},
      {name: "Jessica", gender: "F"},
      {name: "Jurre", gender: "M"},
      {name: "Karim", gender: "M"},
      {name: "Ken", gender: "M"},
      {name: "Maarten", gender: "M"},
      {name: "Maria", gender: "F"},
      {name: "Mohamed", gender: "M"},
      {name: "Muhammad", gender: "M"},
      {name: "Pim", gender: "M"},
      {name: "Rasheed", gender: "M"},
      {name: "Redmar", gender: "M"},
      {name: "Rianne", gender: "F"},
      {name: "Rik", gender: "M"},
      {name: "Ryan", gender: "M"},
      {name: "Stijn", gender: "M"},
      {name: "Thijs", gender: "M"},
      {name: "Tijmen", gender: "M"},
      {name: "Ryan", gender: "M"},
      {name: "WeShi", gender: "F"},
      {name: "Yingdi", gender: "M"},
      {name: "Yonas", gender: "M"},
    ]

  }),

  computed: {

  },

  mounted () {

  },

  methods: {
    prevPerson() {
      if (this.currentPerson == 0) {
        this.currentPerson = this.characters.length - 1;
      } else {
        this.currentPerson -= 1;
      }
    },
    nextPerson() {
      if (this.currentPerson == this.characters.length - 1) {
        this.currentPerson = 0;
      } else {
        this.currentPerson += 1;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.char__button {
  color: red;
}
</style>