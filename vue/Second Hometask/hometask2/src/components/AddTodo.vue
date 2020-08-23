<template>
    <div>

        <input  v-model="text" type="text">
        <button v-if="show" @click="add">Add</button>
        <p v-else>Do some tasks before adding more</p>
    </div>


</template>

<script>

  export default {
    name: "AddTodo.vue",
    data(){
        return{
          text:'',
        }
    },


    props:{
      lengthToDo:{
        type:String,
        required:true,
      }
    },

        computed:{
      show(){
        return this.lengthToDo>=10?false:true
      }
        }
,
    methods:{
      add(){
        if (this.text.length>0)
        {

          this.$emit('addTask',this.text)

        }

      },


    }
  }

</script>

<style scoped>

</style>