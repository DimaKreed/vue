import Vue from 'vue';
import {
  ADD_TASK,
  ADD_TODO, CHANGE_EDIT_MODE_IN_FALSE,
  GET_LIST_FROM_API,
  REMOVE,
  REMOVE_FROM_STORE,
  SET_LIST_FROM_API,
  UPDATE_LIST_IN_API, UPDATE_LIST_IN_STORE
} from "./types";

export const actions={
  [ADD_TODO]:async ({commit},task)=>{
    try {
      //console.log(task,'TASK')
      const {body:{name}}= await Vue.http.post('toDo.json',task)
      const toDoItem={...task,id:name,edit_mode:false};
      commit(ADD_TASK,toDoItem);
    }
    catch (e)
    {
      console.log(e)
    }
},

  [GET_LIST_FROM_API]:async ({commit})=>{
    try {
      const {body}=await Vue.http.get('toDo.json')
        let listOfTODO=[];
        for(let item in body)
        {
          listOfTODO.push({id:item,...body[item],edit_mode:false})
        }
      commit(SET_LIST_FROM_API,listOfTODO);

    }
    catch (e) {
      console.log(e);
    }
  },



  [REMOVE]:async({commit},id)=>{
    try {
      await Vue.http.delete(`toDo/${id}.json`);
      commit(REMOVE_FROM_STORE,id);
    }
    catch (e) {
      console.log(e);
    }
  },

  [UPDATE_LIST_IN_API]:async ({commit},arr)=>{
    try{
      await Vue.http.put(`toDo/${arr[0].id}.json`,arr[1]);
      commit(UPDATE_LIST_IN_STORE,arr);
      commit(CHANGE_EDIT_MODE_IN_FALSE,arr[0].id);
    }
    catch (e) {
      console.log(e)
    }

  }
}