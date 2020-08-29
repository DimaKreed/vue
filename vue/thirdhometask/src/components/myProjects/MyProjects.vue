<template>
    <div>
        <input type="text" v-model="task.task" placeholder="Item to do">
        <input type="text" v-model="task.description" placeholder="Description">
        <b-button  @click="addTask" >Add new "ToDo" Task</b-button>
        <ul v-for="(task,i) in toDoList" :key="i">
            <div v-show="!task.edit_mode">
                <li
                        @dblclick="edit(task)"
                >{{i+1}}. Task:{{task.toDo.task}}</li>

                <li
                        @dblclick="edit(task)"
                >Description:{{task.toDo.description}}</li>
                <b-button @click=" remove(task.id) ">Delete</b-button>

            </div>


            <div v-show="task.edit_mode"
                 @keyup.enter="update(task)">

              <span >Task:</span>  <input
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


        toDoList:[],
      }
    },

    computed:{

    },

    methods:{

       getItems(){
         this.$http.get('toDo.json')
          .then(res=>{
            return res.json()
          } ).then(res=>{

            this.toDoList=[];

           for(let items in res)
           {
             this.toDoList.push({id:items,toDo:res[items]})
           }

         })
      },


      async addTask(){

          await  this.$http.post('toDo.json',this.task)

          this.task.task='';
          this.task.description='';
          this.id++;

          this.getItems();
      },

       async remove(id)
       {
          await this.$http.delete(`https://myvueproject-2080c.firebaseio.com/toDo/${id}.json`);
          this.getItems();
        },

      edit(task){
         this.$set(task, 'edit_mode', true)
        this.editTask=task.toDo.task;
        this.editDescription=task.toDo.description;

      },

       async update(task){
         await this.$http.put(`toDo/${task.id}.json`,{task:this.editTask, description:this.editDescription})

        this.getItems();
         task.edit_mode=false;
      }

      // async update(task){
      //   this.task.task=task.toDo.task;
      //   this.task.description=task.toDo.description;
      //
      //
      //    // await this.$http.put(`toDo/${id}.json`)
      // }


    },

    beforeMount() {
        this.getItems();
    },
  }
</script>

<style scoped>
li{list-style: none}
</style>