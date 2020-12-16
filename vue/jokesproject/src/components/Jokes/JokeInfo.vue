<template>
    <div>
<!--        <div v-if="loading" > <p>loading...</p></div>-->
<!--        <div v-else class="card" style="width: 18rem;">-->
<!--            <div class="card-body">-->
<!--                <h5 class="card-title">Card title</h5>-->
<!--                <p class="card-text">{{joke.joke}}</p>-->
<!--                <a v-on:click="navigateToJokeList" class="btn btn-primary">Back to joke list</a>-->
<!--            </div>-->
<!--        </div>-->
       {{convertQuotes(joke.joke)}}
    </div>


</template>

<script>
  import {HTTP} from "../../utils/http-common";

  export default {
    name: "JokeInfo",

    data() {
      return {
        id:this.$route.params.id,
        joke: null,
        errors:[],
        loading:true
      }
    },
    mounted(){
      HTTP.get(this.id)
        .then(response=>{
          this.joke=response.data.value;
          console.log(this.joke)
        })
        .catch(error=>{this.errors.push(error)})
        .finally(()=>{
          this.loading=false})
    },

    methods: {
      navigateToJokeList() {
        this.$router.push({name: 'JokesList'})
      },
      convertQuotes(string) {
        return string.replace(/&quot;/g, '"');
      }
    }
  }

</script>
