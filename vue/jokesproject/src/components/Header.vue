<template>
    <div class="fixed-top">

        <nav class="navbar  navbar-expand-lg navbar-dark indigo mb-4 bg-dark">

            <ul class="nav nav-pills">

                <li class="nav-item">
                    <router-link
                            class="nav-link"
                            active-class="active"
                            style="cursor: pointer"
                            exact
                            to="/">Home
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link
                            class="nav-link"
                            active-class="active"
                            style="cursor: pointer"
                            to="/jokes">Jokes
                    </router-link>
                </li>

            </ul>

            <div class="collapse navbar-collapse">
                <form class="form-inline ml-auto">
                    <div class="md-form my-0">
                        <input class="form-control"
                               type="search"
                               placeholder="Search"
                               aria-label="Search"
                               v-on:input="searchJoke(search)"
                               v-model="search">
                    </div>
                </form>

            </div>

        </nav>
    </div>
</template>

<script>
  import {JokesModule} from './../store/index'

  import {createNamespacedHelpers} from 'vuex';
  import {FILTER_PAGINATED_DATA} from "../store/jokes/types";

  const {mapMutations} = createNamespacedHelpers(JokesModule);

  export default {
    name: "Header",
    data() {
      return {
        search: '',
      }
    },

    methods: {
      ...mapMutations({
        FILTER_PAGINATED_DATA,
      }),

      searchJoke(searchString) {
        this.FILTER_PAGINATED_DATA(searchString)
      },
    }
  }
</script>

<style>
</style>
