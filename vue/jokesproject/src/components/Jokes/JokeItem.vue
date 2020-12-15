<template>
    <div>
        <router-link :to="`jokes/${joke.id}`">{{joke.joke}}</router-link>
<!--        <h3>{{joke.joke}}</h3>-->
        <button @click="navigateToJokeList">Back to joke list</button>
    </div>
</template>

<script>

  export default {
    name: 'JokeItem',
    props:{
      joke:{
        type:Object,
        required:true
      }
    },
    data(){
      return{
        id:null
      }
    },
    methods: {
      navigateToJokeList() {
        this.$router.push({name: 'JokesList'})
      },
    }
  }
</script>

<style>

</style>
