import {
  ERRORS,
  FILTERED_PAGINATED_JOKES,
  JOKES,
  LOADING_STATUS,
  ONE_JOKE,
  PAGINATED_JOKES,
  SEARCH_STRING
} from "./types";

export const getters = {
  [JOKES]: (state) => state.jokes,
  [ONE_JOKE]: (state) => state.joke,
  [SEARCH_STRING]: (state) => state.searchString,
  [LOADING_STATUS]: (state) => state.loading_status,
  [ERRORS]: (state) => state.errors,
  [PAGINATED_JOKES]: (state) => state.paginatedJokes,
  [FILTERED_PAGINATED_JOKES]:(state)=>state.filteredPaginatedJokes,
}
