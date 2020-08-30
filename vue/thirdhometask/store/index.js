import {state} from "./MyProjects/state";
import {actions} from "./MyProjects/actions";
import {getters} from "./MyProjects/getters";
import {mutations} from "./MyProjects/mutations";

const namespaced=true;

export const MyProjectsModule='MyProjects';

  export const MyProjects={
  namespaced,
    state,
    actions,
    getters,
    mutations,
}