<template>
    <div>
      <div><input v-model="textToPush" type="text" >
        <button @click="add" :class="hidden"  >Add task</button>
        <p v-if="show">Do some tasks before adding more</p>
      </div>
      <ul>
        <li v-for="(task, index) in toDoList" :key="index">
          {{ task }}
          <button @click="remove(index)">Remove</button>
        </li>
      </ul>
    </div>
</template>

<script>

export default {
  name: 'App',

  data(){
    return{
      show:false,
      toDoList:['Clean house','Make the cake','Learn some poetry'],
      textToPush:'',
    }
  },

  computed:{
    hidden(){
      if(this.toDoList.length>=10)
    {
    return 'hidden'; }
    else {return ''}
    }
  },

  methods:{
    add() {
      if (this.textToPush.length>0)
      {
      this.toDoList.push(this.textToPush)
        this.textToPush='';

      }
      if(this.toDoList.length>=10) this.show=true;
    },
    remove(index)
    {
      this.toDoList.splice(index,1)
      if(this.toDoList.length<10) this.show=false;
    },
    writeMsg()
    {if(this.toDoList.length>=10)
      this.textToPush.innerText="Do some tasks before adding more"},
  }
}
</script>

<style>
.hidden{display: none}
</style>
