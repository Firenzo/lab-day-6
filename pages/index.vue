<template>
  <div class="char">
    <h1 class="char__title">Choose your character</h1>
    <img class="char__pic" :src="require(`~/assets/images/characters/${characters[currentPerson].name}.png`)">
    <h2 class="char__name">{{characters[currentPerson].name}}</h2>
    <div class="char__button-container">
      <button class="char__button-prev" @click="prevPerson()"></button>
      <NuxtLink class="char__button-start" to="page2">Start</NuxtLink>
      <button class="char__button-next" @click="nextPerson()"></button>
    </div>
    
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
  .char {
    background-color: #0070ad;
    font-family: Arial, Helvetica, sans-serif;
    
    &__title {
      padding-top: 50px;
      text-align: center;
      font-size: 40px;
      display: block;
    }

    &__pic {
      height: 300px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    &__name {
      font-size: 40px;
      text-align: center;
    }
    
    &__button-container {
      display: flex;
      justify-content: space-between;
      text-align: center;
      font-size: 40px;
      width: 800px;
      margin: 0 auto;
    }

    &__button-prev {
      transform: translate(0px, -300px);
      width: 0;
      height: 0;
      border-top: 50px solid #0070ad;
      border-right: 100px solid red;
      border-bottom: 50px solid #0070ad;
    }
    &__button-start{
            color: black;
      text-decoration: none;
      width: 200px;
      text-align: center;
      background-color: #f1f1f1;
      margin: 10px;
      padding: 20px;
      font-size: 30px;
      display: block;
    }
    &__button-next {
      transform: translate(0px, -300px);
      width: 0;
      height: 0;
      border-top: 50px solid #0070ad;
      border-left: 100px solid red;
      border-bottom: 50px solid #0070ad;
    }
  }
</style>