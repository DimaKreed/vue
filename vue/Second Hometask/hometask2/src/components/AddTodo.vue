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
          show:true,
        }
    },

    watch:{
      text(){
        if(this.$parent.toDoList.length<=10)
        {this.show=true}
      }
    },


    methods:{
      add(){
        if (this.text.length>0)
        {

          this.$emit('addTask',this.text)

        }
        if(this.$parent.toDoList.length>=10)
        {this.show=false}

      },


    }
  }

</script>

<style scoped>

</style>