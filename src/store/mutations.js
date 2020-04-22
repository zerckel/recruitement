export const addCombination = (state, obj) => {
  state.combination.push(obj)
  localStorage.setItem('combination', JSON.stringify(state.combination))
}
export const incrementAppears = (state, id) => {

  state.combination[id.id].nbrAppears++
  localStorage.setItem('combination', JSON.stringify(state.combination))
}

export const getLocalStorage = (state) => {
  state.combination = JSON.parse(localStorage.getItem('combination'))
}