import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    home: [],
  },
  mutations: {
    SET_HOME(state, home) {
      state.home = home;
    }
  },
  actions: {
    //Get Home json data
    async getHomeData({ commit }) {
      const url = "home.json";
      const response = await axios.get(url);
      const { data: home } = response;
      commit("SET_HOME", home);
    },
  },
  modules: {},
});
