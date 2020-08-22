<template>
    <div>
        <div v-for="(task,i) in toDo" :key="i">
            <TodoItem
                    :tasks="task"
                    @deleteTask="deleteTask"
            />
        </div>
    </div>
</template>


<script >
     import TodoItem from "./TodoItem";

     export default {
       name:"ToDoList",


       props:{
         toDo: {
           type:Array,
           required:true,

         }
       },

       components:{
            TodoItem,
       },

       methods:{
         deleteTask(event){

           this.$emit("deleteTask",event);
         }
       }
     }

</script>