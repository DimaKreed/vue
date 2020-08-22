<template>
    <div >
        <span>
            <h3>
            {{tasks}}
            </h3>
            <button @click="deleteTask">Delete</button>

        </span>

    </div>
</template>

<script>
  export default {
    name: "TodoItem",

    props:{
      tasks:{
        type:String,
        required:true,


      }
    },

    methods:{
      deleteTask(){
        this.$emit("deleteTask",this.tasks);
      }

    }
  }
</script>

<style scoped>

</style>