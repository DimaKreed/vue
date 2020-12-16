<template>
    <div>
        <router-link :to="{name:'JokeInfo',params:{id:joke.id}}">{{joke.joke}}</router-link>
<!--        <h3>{{joke.joke}}</h3>-->
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

    }
  }
</script>

<style>

</style>
