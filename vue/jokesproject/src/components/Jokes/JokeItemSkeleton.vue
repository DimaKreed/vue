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
    export default {
      name:"JokeItemSkeleton",
      props:{
        loading:{
          type:Boolean,
          required:true
        },
        errors:{
          type:Array,
          required:true
        }
      }
    }

</script>

<style>
    .loading {
        width: 17em;
        height: 40em;
    }
</style>
