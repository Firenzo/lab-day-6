<template>
  <div class="char">
    <div class="image">
      <img src="~/assets/capfinder-logo.png">
    </div>
    <h1 class="char__title">Choose your character</h1>
    <img
      class="char__pic"
      :src="
        require(`~/assets/images/characters/${$store.state.characters[currentPerson].name}.png`)
      "
    />
    <h2 class="char__name">{{ $store.state.characters[currentPerson].name }}</h2>
    <div class="char__button-container">
      <button class="char__button-prev" @click="prevPerson()"></button>
      <NuxtLink class="char__button-start" @click.native="setCharacter()" to="ingang">Start</NuxtLink>
      <button class="char__button-next" @click="nextPerson()"></button>
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

  data: () => ({
    currentPerson: 0,
  }),

  computed: {},

  mounted() {},

  methods: {
    prevPerson() {
      if (this.currentPerson == 0) {
        this.currentPerson = this.$store.state.characters.length - 1;
      } else {
        this.currentPerson -= 1;
      }
    },
    nextPerson() {
      if (this.currentPerson == this.$store.state.characters.length - 1) {
        this.currentPerson = 0;
      } else {
        this.currentPerson += 1;
      }
    },

    setCharacter(){
      console.log('hoi');
      this.$store.dispatch('changeChosenCharacter', {selectedCharacter: this.currentPerson});
    }
  },
};
</script>

<style lang="scss" scoped>

div.image{
  display:flex;
  justify-content: center;
  padding-top:30px;

  img {
    display:block;
    width: 300px;
  }
}
.char {
  background-color: #6ac3f4;
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
    border-top: 50px solid #6ac3f4;
    border-right: 100px solid red;
    border-bottom: 50px solid #6ac3f4;
  }
  &__button-start {
    color: white;
    text-decoration: none;
    width: 200px;
    text-align: center;
    background-color: #0070ae;
    margin: 10px;
    padding: 20px;
    font-size: 30px;
    display: block;
    border-radius:10px;
    box-shadow: 0 0 12px rgba(255,255,255,0.5);
    &:hover {
      box-shadow: 0 0 0px rgb(80,80,80,0.0);
      background-color: #630e9e;
      color:white;
    }
  }
  &__button-next {
    transform: translate(0px, -300px);
    width: 0;
    height: 0;
    border-top: 50px solid #6ac3f4;
    border-left: 100px solid red;
    border-bottom: 50px solid #6ac3f4;
  }
}
</style>
