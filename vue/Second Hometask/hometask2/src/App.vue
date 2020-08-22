<template>
<div>
    <AddTodo @addTask="add"/>

    <ToDoList
            :toDo="toDoList"
            @deleteTask="deleteTask"
    />
</div>
</template>

<script>

import AddTodo from "./components/AddTodo";
import ToDoList  from "./components/ToDoList";

export default {
  name: 'App',

  data(){
    return{
      toDoList:['Clean house','Make the cake','Learn some poetry'],

    }
  },


  components: {
    AddTodo,
    ToDoList
  },

  methods:{
    add(event){
      this.toDoList.push(event)

    },

    deleteTask(event){

      this.toDoList.splice(this.toDoList.findIndex(value => value===event),1);
      if(this.toDoList.length<10){
        console.log(AddTodo.data().show);
        AddTodo.data().show=true;}
    }
  }
}
</script>

<style>

</style>
