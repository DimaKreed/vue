import {HTTP} from "../../utils/http-common";
import {CHANGE_LOADING_STATUS, GET_JOKES, GET_ONE_JOKE, SET_ERRORS, SET_JOKE, SET_JOKES} from "./types";
import axios from "axios";
import {baseURL} from "../../constants";

export const actions = {

  [GET_JOKES]: ({commit}, URLtoGetJokes) => {

    commit(CHANGE_LOADING_STATUS, true);

    HTTP.get(URLtoGetJokes)
      .then(response => {
        commit(SET_JOKES, response.data.value)
      })
      .catch(errors => {
        commit(SET_ERRORS, errors)
      })
      .finally(() => commit(CHANGE_LOADING_STATUS, false))
  },

  [GET_ONE_JOKE]: ({commit}, id) => {
    commit(CHANGE_LOADING_STATUS, true);
    axios.get(baseURL + id)
      .then(response => {
        commit(SET_JOKE, response.data.value);
      })
      .catch(errors => {
        commit(SET_ERRORS, errors)
      })
      .finally(() => commit(CHANGE_LOADING_STATUS, false))
  }
}
