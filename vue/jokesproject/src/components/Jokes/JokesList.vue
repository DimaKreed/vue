<template>
    <div>
        <div v-for="joke in jokes" :key="joke.id">
            <JokeItem :joke="joke"></JokeItem>
        </div>
        <router-view></router-view>

    </div>
</template>

<script>
  import {HTTP} from "../../utils/http-common";
  import JokeItem from "./JokeItem";

  export default {
    name: 'JokesList',
    data() {
      return {
        jokes: [],
        errors: [],
        URLtoGetJokes: '/random/1000',
      }
    },
    components: {JokeItem},

    mounted() {
      HTTP.get(this.URLtoGetJokes)
        .then(response => {
          console.log(response.data)
          this.jokes = response.data.value
        })
        .catch(e => {
          console.log(e)
        })
    },


  }
</script>

<style>

</style>
