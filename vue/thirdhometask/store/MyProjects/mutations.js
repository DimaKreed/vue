import {
  ADD_TASK,
  CHANGE_EDIT_MODE_IN_FALSE,
  CHANGE_EDIT_MODE_IN_TRUE,
  REMOVE_FROM_STORE,
  SET_LIST_FROM_API, UPDATE_LIST_IN_STORE
} from "./types";

export const mutations={
  [ADD_TASK]:(state,toDoItem)=>{
    //this.$set(toDoItem, 'edit_mode', true)
    state.toDoList.push(toDoItem);
  },
  [SET_LIST_FROM_API]:(state,listOfTODO)=>{
    state.toDoList=listOfTODO;
  },

  [REMOVE_FROM_STORE]:(state,id)=>{
    state.toDoList.splice(state.toDoList.findIndex(value => value.id===id),1);
  },

  [CHANGE_EDIT_MODE_IN_TRUE]:(state, id)=>{
    let identifier=state.toDoList.findIndex(value => value.id===id);
    state.toDoList[identifier].edit_mode=true;
  },

  [CHANGE_EDIT_MODE_IN_FALSE]:(state, id)=>{
    let identifier=state.toDoList.findIndex(value => value.id===id);
    state.toDoList[identifier].edit_mode=false;
  },

  [UPDATE_LIST_IN_STORE]:(state,arr)=>{
    let identifier=state.toDoList.findIndex(value => value.id===arr[0].id);
    state.toDoList[identifier].task=arr[1].task
    state.toDoList[identifier].description=arr[1].description
  }
}