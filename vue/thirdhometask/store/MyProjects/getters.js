import {LIST_OF_TODOS} from "./types";

export const getters={
  [LIST_OF_TODOS]: state=>{
    return state.toDoList;
  }

}