import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{},
    searchName: ""
  },
  getters: {
  },
  mutations: {
    resetUser(state){
      state.user = { }
    },
    updateUser(state,newUser){
      state.user = newUser;
      sessionStorage.setItem("user",JSON.stringify(state.user));
    },
    updateUserAvatar(state,url){
      state.user.avatar = url
      sessionStorage.setItem("user",JSON.stringify(state.user));
    },
    updateUsername(state,username){
      state.user.username =  username
      sessionStorage.setItem("user",JSON.stringify(state.user));
    },
    updateSearchName(state,newSearch){
      state.searchName = newSearch;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage, // 或者使用 window.sessionStorage
      paths: ['user'] // 指定需要持久化的状态路径
    })
  ]
})
