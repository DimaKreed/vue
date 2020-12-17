<template>
    <div>

        <JokeItemSkeleton/>

        <div v-if="!loading" class="card-body">
            <h5 class="card-title">{{joke.id}}</h5>
            <p class="card-text">{{convertQuotes(joke.joke)}}</p>
        </div>

        <a v-on:click="navigateToJokeList" class="btn btn-primary">Back to joke list</a>

    </div>
</template>

<script>
  import JokeItemSkeleton from "./JokeItemSkeleton";

  import {JokesModule} from './../../store/index'

  import {createNamespacedHelpers} from 'vuex';
  import {GET_ONE_JOKE, LOADING_STATUS, ONE_JOKE} from "../../store/jokes/types";

  const {mapActions, mapGetters} = createNamespacedHelpers(JokesModule);

  export default {
    name: "JokeInfo",

    components: {JokeItemSkeleton},

    data() {
      return {
        id: this.$route.params.id,
      }
    },

    computed: {
      ...mapGetters({
        loading: LOADING_STATUS,
        joke:ONE_JOKE
      }),
    },

    methods: {
      ...mapActions({
        getJoke:GET_ONE_JOKE
      }),
      navigateToJokeList() {
        this.$router.push({name: 'JokesList'})
      },
      convertQuotes(string) {
        return string.replace(/&quot;/g, '"');
      },
    },

    mounted() {
        this.getJoke(this.id);
    }
  }

</script>
