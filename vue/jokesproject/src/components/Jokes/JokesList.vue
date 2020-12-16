<template>
    <div>
        <JokeItemSkeleton
        :loading="loading"
        :errors="errors"/>

        <div v-if="!loading">
            <div v-for="joke of paginatedJokes"
                 :key="joke.id"
                 class="list-group">
                <JokeItem :joke="joke"></JokeItem>
            </div>
            <div>
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

  import {HTTP} from "../../utils/http-common";
  import JokeItem from "./JokeItem";
  import JokeItemSkeleton from "./JokeItemSkeleton";

  export default {
    name: 'JokesList',
    data() {
      return {
        jokes: [],
        errors: [],
        loading: true,
        URLtoGetJokes: '/random/1000',
        limit: 100,
        offset: 0
      }
    },
    components: {JokeItemSkeleton, JokeItem},

    mounted() {
      HTTP.get(this.URLtoGetJokes)
        .then(response => {
          this.jokes = response.data.value
        })
        .catch(error => {
          this.errors.push(error);
        })
        .finally(() => this.loading = false)
    },
    computed: {

      numberOfPages() {
        return Math.floor(this.jokes.length / this.limit) + 1;
      },
      paginatedJokes() {
        const start = this.offset * this.limit;
        const end = start + this.limit;
        return this.jokes.slice(start, end)
      }
    },
    methods: {
      nextPage() {
        if (this.offset < this.numberOfPages)
          this.offset++
      },
      prevPage() {
        if (this.offset > 0)
          this.offset--
      }

    }


  }
</script>

<style>
</style>
