import {CHANGE_LOADING_STATUS, PAGINATE_JOKES, SET_ERRORS, SET_JOKE, SET_JOKES, FILTER_PAGINATED_DATA} from "./types";

export const mutations = {
  [SET_JOKE]: (state, joke) => {
    state.joke = joke;
  },

  [SET_JOKES]: (state, jokes) => {
    if (!state.jokes.length) {
      state.jokes = jokes;
    }
  },

  [FILTER_PAGINATED_DATA]: (state, searchString) => {
    if(state.paginatedJokes.length){
      let filteredJokes = state.paginatedJokes;
      filteredJokes = filteredJokes.filter((value) => value.joke.toLowerCase().indexOf(searchString.toLowerCase()) > -1)

      if (!searchString) filteredJokes=state.paginatedJokes;
      state.filteredPaginatedJokes = filteredJokes;
    }
  },

  [CHANGE_LOADING_STATUS]: (state, newStatus) => {
    state.loading_status = newStatus
  },

  [SET_ERRORS]: (state, errors) => {
    state.errors = errors;
  },

  [PAGINATE_JOKES]: (state, {offset, limit}) => {
    const start = offset * limit;
    const end = start + limit;
    state.paginatedJokes = state.jokes.slice(start, end);
    state.filteredPaginatedJokes=state.paginatedJokes;
  }
}

