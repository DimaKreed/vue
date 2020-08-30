<template>
    <div>
        <input type="text" v-model="task.task" placeholder="Item to do">
        <input type="text" v-model="task.description" placeholder="Description">
        <b-button  @click="add" >Add new "ToDo" Task</b-button>

        <ul v-for="(task,i) in toDoList" :key="i">
            <div @dblclick="ActivateEditMode(task)"
                 v-if="!task.edit_mode">
                <li>{{i+1}}. Task:{{task.task}} </li>
                <li> Description:{{task.description}} </li>
                <b-button @click="removeToDo(task.id)">Delete</b-button>
            </div>

            <div v-show="task.edit_mode"
                 @keyup.enter="update(task)">

                <span >{{i+1}}.Task:</span>  <input
                    v-model="editTask"
                    type="text"><br>

                <span>Description</span> <input
                    v-model="editDescription"
                    type="text"><br>
                <b-button @click=" update(task) ">Update</b-button>

            </div>

            <hr>
        </ul>
    </div>
</template>

<script>
  import {
    ADD_TODO,
    LIST_OF_TODOS,
    GET_LIST_FROM_API,
    REMOVE,
    CHANGE_EDIT_MODE_IN_TRUE,
    UPDATE_LIST_IN_API
  } from "../../../store/MyProjects/types";
  import {MyProjectsModule} from "../../../store";
  import {createNamespacedHelpers} from 'vuex';

  const{mapActions}=createNamespacedHelpers(MyProjectsModule)
  const{mapGetters}=createNamespacedHelpers(MyProjectsModule);
  export default {
    name: "MyProjects",


    data(){
      return{
        task:{
          task:'',
          description:'',
        },
        editTask:'',
        editDescription:'',
      }
    },

    computed:{
      ...mapGetters({
        toDoList:LIST_OF_TODOS
      })
    },

    methods:{
      ...mapActions({
        addTask:ADD_TODO,
        REMOVE,
        UPDATE_LIST_IN_API

      }),

      async add(){
        try {
          await this.addTask(this.task)
          this.task.task='';
          this.task.description='';
        }
        catch (e) {
          console.log(e);
        }
      },

      async removeToDo(id){
        try {
          await this.REMOVE(id);
        }
        catch (e) {
          console.log(e);
        }
      },

      async ActivateEditMode(task){
        await this.$store.commit(`${MyProjectsModule}/${CHANGE_EDIT_MODE_IN_TRUE}`,task.id);
        this.editTask=task.task;
        this.editDescription=task.description;

      },

      async update(task){
        let newTASK={task:this.editTask,description:this.editDescription,id:task.id}
        let arr=[task,newTASK]
        await this.UPDATE_LIST_IN_API(arr);

      }


    },


    beforeMount() {
    this.$store.dispatch(`${MyProjectsModule}/${GET_LIST_FROM_API}`)
  },

  }

</script>

<style scoped>
li{list-style: none}
</style>