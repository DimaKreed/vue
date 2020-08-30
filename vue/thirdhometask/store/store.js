import Vue from 'vue'
import Vuex from 'vuex'
import {MyProjects,MyProjectsModule} from "./index";

Vue.use(Vuex);

export const store=new Vuex.Store(
  {
    modules:{
      [MyProjectsModule]:MyProjects
    }
  }
)