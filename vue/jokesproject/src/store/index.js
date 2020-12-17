import {state} from './jokes/state'
import {mutations} from './jokes/mutations'
import {getters} from './jokes/getters'
import {actions} from './jokes/actions'

const namespaced=true;

export const JokesModule='JokesModule';

export const Jokes={
  namespaced,
  state,
  actions,
  getters,
  mutations,
}
