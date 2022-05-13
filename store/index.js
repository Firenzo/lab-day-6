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
    {name: "Ryan", gender: "M"},
    {name: "WeShi", gender: "F"},
    {name: "Yingdi", gender: "M"},
    {name: "Yonas", gender: "M"},
  ],
  chosenCharacter: undefined,
  currentObjective: undefined,
})
  
export const mutations = {
  SET_CHOSEN_CHARACTER(state, index) {
    state.chosencharacter = state.characters[index]
  },

  SET_CURRENT_OBJECTIVE(state, index) {
    state.chosencharacter = state.characters[index]
  }
}
  
export const actions = {
  changeChosenCharacter (context, index){
    context.commit('SET_CHOSEN_CHARACTER', index)
  },
  changeCurrentObjective (context, currentObjective) {
    context.commit('SET_CURRENT_OBJECTIVE', currentObjective)
  },
}
  
export const getters = {

}
  