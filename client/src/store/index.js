import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: []
  },
  mutations: {
    FETCH_CONTACTS (state, payload) {
      payload.sort((a, b) => {
        if (a.name < b.name) { return -1 }
        if (a.name > b.name) { return 1 }
        return 0
      })
      state.contacts = payload
    },
    FILTER_CONTACTS (state, payload) {
      state.contacts = state.contacts.filter(function (contact) {
        return contact.name.includes(payload)
      })
    }
  },
  actions: {
    fetchContacts (context) {
      return new Promise(function (resolve, reject) {
        axios({
          method: 'GET',
          url: '/all'
        })
          .then(({ data }) => {
            context.commit('FETCH_CONTACTS', data)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  modules: {
  }
})
