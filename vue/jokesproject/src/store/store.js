import Vue from "vue";
import Vuex from "vuex";
import {Jokes, JokesModule} from "./index";

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    [JokesModule]: Jokes
  }
})
