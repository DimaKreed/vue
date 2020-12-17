<template>
    <div>
        <JokeItemSkeleton/>

        <div class="float-right " v-for="n of 3" :key="n">
            <button :disabled="limit===10*n" v-on:click="setLimit(n*10)" class="btn btn-primary">{{n*10}}</button>
        </div>
        <br><br>

        <div v-if="!loading">
            <div v-for="joke of paginatedJokes"
                 :key="joke.id"
                 class="list-group">
                <JokeItem :joke="joke"></JokeItem>
            </div>


            <div class="float-right bottom-item" v-for="n of 3" :key="n">
                <button :disabled="limit===10*n" v-on:click="setLimit(n*10)" class="btn btn-primary">{{n*10}}</button>
            </div>

            <div class="bottom-item">
                <ul class="pagination justify-content-center">
                    <li class="page-item "
                        :class="offset===0?'disabled':''"
                        v-on:click="prevPage">
                        <a class="page-link">Previous</a>
                    </li>

                    <li class="page-item active">
                        <a class="page-link">{{offset+1}}</a>
                    </li>

                    <li class="page-item"
                        :class="offset===numberOfPages?'disabled':''"
                        v-on:click="nextPage">
                        <a class="page-link">Next</a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
  import JokeItem from "./JokeItem";
  import JokeItemSkeleton from "./JokeItemSkeleton";

  import {
    GET_JOKES,
    SEARCH_STRING,
    JOKES,
    LOADING_STATUS,
    PAGINATE_JOKES,
    FILTERED_PAGINATED_JOKES
  } from "../../store/jokes/types";
  import {JokesModule} from './../../store/index'

  import {createNamespacedHelpers} from 'vuex';

  const {mapActions, mapGetters, mapMutations} = createNamespacedHelpers(JokesModule);

  export default {
    name: 'JokesList',

    data() {
      return {
        URLtoGetJokes: '/random/1000',
        limit: 10,
        offset: 0
      }
    },

    components: {JokeItemSkeleton, JokeItem},

    computed: {
      ...mapGetters({
        SEARCH_STRING,
        jokes: JOKES,
        loading: LOADING_STATUS,
        paginatedJokes: FILTERED_PAGINATED_JOKES
      }),

      numberOfPages() {
        return Math.floor(this.jokes.length / this.limit) + 1;
      },
    },

    methods: {
      ...mapActions({
        getJokes: GET_JOKES
      }),

      ...mapMutations({
        paginateJokes: PAGINATE_JOKES
      }),

      nextPage() {
        if (this.offset < this.numberOfPages)
          this.offset++;
        this.paginateJokes({offset: this.offset, limit: this.limit})

      },

      prevPage() {
        if (this.offset > 0)
          this.offset--;
        this.paginateJokes({offset: this.offset, limit: this.limit})
      },

      setLimit(payload) {
        this.limit = payload;
        this.paginateJokes({offset: this.offset, limit: this.limit})
      }

    },

    mounted() {
      this.getJokes(this.URLtoGetJokes);
      this.paginateJokes({offset: this.offset, limit: this.limit})
    }

  }
</script>

<style>
    .bottom-item {
        margin-top: 2em;
    }

    .float-right {
        margin-right: 2em;
    }

</style>
