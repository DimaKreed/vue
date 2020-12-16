<template>
    <div>
        <div v-if="errors&&errors.length">
            <div v-for="(error,index) of errors" :key="index" >
                <p>{{error.message}}</p>
            </div>
        </div>

        <div v-else>
            <div v-if="loading" >
                <p class="loading">Wait a moment, we are loading data</p>
            </div>

            <div v-else v-for="joke of jokes" :key="joke.id">
                <JokeItem :joke="joke"></JokeItem>
            </div>
        </div>


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
        loading:true,
        URLtoGetJokes: '/random/1000',
        limit:10,
        offset:0
      }
    },
    components: {JokeItem},

    mounted() {
      HTTP.get(this.URLtoGetJokes)
        .then(response => {
          this.jokes = response.data.value
        })
        .catch(error => {
          this.errors.push(error);
            })
        .finally(()=>this.loading=false)
    },


  }
</script>

<style>
.loading{
    height: 30em;
    display: flex;
    align-items: center;
    justify-content: center
}
</style>
