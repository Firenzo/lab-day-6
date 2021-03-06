export const state = () => ({
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
    {name: "WeShi", gender: "F"},
    {name: "Yingdi", gender: "M"},
    {name: "Yonas", gender: "M"},
  ],
  chosenCharacter: undefined,

  objectives: [
    {
      id: 1,
      acquiredPasje: false,
      title: "Ga naar de Academy om je kennis uit te breiden.",
    },
    {
      id: 2,
      title: "Ga op zoek naar Amber om kennis te maken."
    },
    {
      id: 3,
      title: "Door al je harde werk val je bijna in slaap. Ga op zoek naar goede koffie.",
      fail: "koffie-fail"
    },
    {
      id: 4,
      title: "Gefeliciteerd, je bent nu ingewerkt!"
    },
  ],

  currentObjective: 1,
})
  
export const mutations = {
  SET_CHOSEN_CHARACTER(state, {selectedCharacter}) {
    state.chosenCharacter = selectedCharacter;
  },

  SET_CURRENT_OBJECTIVE(state, {currentObjective}) {
    state.currentObjective = currentObjective
  },

  ACQUIRE_PASJE(state) {
    state.objectives[0].acquiredPasje = true;
  }
}
  
export const actions = {
  changeChosenCharacter (context, {selectedCharacter}){
    context.commit('SET_CHOSEN_CHARACTER', {selectedCharacter: selectedCharacter});
  },

  acquirePasje(context) {
    context.commit('ACQUIRE_PASJE');
  },

  changeCurrentObjective (context, {currentObjective}) {
    context.commit('SET_CURRENT_OBJECTIVE', {currentObjective: currentObjective});
  },
}
  
export const getters = {

}
  