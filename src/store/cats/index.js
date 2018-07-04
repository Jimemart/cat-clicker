import * as mutations from './mutations'

export default {
  namespaced: true,
  state () {
    return {
      selectedCat: {
        name: '',
        message: '',
        img: '',
        id: null
      },
      listOfCats: [],
      counter: 0
    }
  },
  mutations
}
