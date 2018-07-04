export const SET_LIST = (state, value) => {
  state.listOfCats = [...value]
}

export const SELECT_CAT = (state, value) => {
  state.selectedCat = state.listOfCats.filter(elem => elem.id === value)[0]
}

export const ADD_ONE = (state) => {
  state.counter ++
}

export const RESTORE_COUNTER = (state) => {
  state.counter = 0
}
