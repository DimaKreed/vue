<template>
    <div>

        <JokeItemSkeleton
                :errors="errors"
                :loading="loading"
        />
        <div v-if="!loading" class="card-body">
            <h5 class="card-title">{{joke.id}}</h5>
            <p class="card-text">{{joke.joke}}</p>
        </div>

        <a v-on:click="navigateToJokeList" class="btn btn-primary">Back to joke list</a>

    </div>
</template>

<script>
  import {baseURL} from "../../constants"
  import axios from "axios";
  import JokeItemSkeleton from "./JokeItemSkeleton";

  export default {
    name: "JokeInfo",
    components: {JokeItemSkeleton},
    data() {
      return {
        id: this.$route.params.id,
        joke: {},
        errors: [],
        loading: true,
      }
    },
    mounted() {
      axios.get(baseURL + this.id)
        .then(response => {
          this.joke = response.data.value
        })
        .catch(error => {
          console.log(error)
          this.errors.push(error);
        })
        .finally(() => this.loading = false)

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
