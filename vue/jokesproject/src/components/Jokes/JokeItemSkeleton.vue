<template>
    <div>
        <div v-if="errors&&errors.length">
            <div v-for="(error,index) of errors" :key="index" class="alert alert-danger">
                <p>{{error.message}}</p>
            </div>
        </div>

        <div v-else>
            <div v-if="loading">
                <div class="d-flex justify-content-center">
                    <p class="loading">Wait a moment, we are loading data</p>
                    <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

  import {JokesModule} from './../../store/index'
  import {createNamespacedHelpers} from "vuex";
  import {ERRORS, LOADING_STATUS} from "../../store/jokes/types";

  const {mapGetters} = createNamespacedHelpers(JokesModule);
    export default {
      name:"JokeItemSkeleton",

      computed:{
        ...mapGetters({
          loading:LOADING_STATUS,
          errors:ERRORS
        })
      },


    }

</script>

<style>
    .loading {
        width: 17em;
        height: 40em;
    }
</style>
