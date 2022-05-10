import { createStore } from 'vuex'


export default createStore({
  state: {
    characters:[], // list of characters
    charactersFilter: [] // characters filtered by search
  },
  getters: {
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload
    }
  },
  actions: {
    async fetchCharacters({ commit }) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character/')
        const data = await response.json()
        console.log(data)
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
      }

      catch (error) {
        console.log(error)
      }
      
    },

    FilterByStatus({ commit, state }, status) {
      const filter = state.characters.filter((character) => {
        return character.status.includes(status)
      })
      commit('setCharactersFilter', filter)
    },

    filterByName({commit, state}, name) {
      const formatName = name.toLowerCase()
      const filter = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase()
        if(characterName.includes(formatName)) {
          return character
        }
      })
      commit('setCharactersFilter', filter)
    }


    
  },

  modules: {
  }
})
