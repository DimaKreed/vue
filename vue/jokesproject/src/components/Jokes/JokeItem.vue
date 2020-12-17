<template>
    <div>
        <router-link
                :to="{name:'JokeInfo',params:{id:joke.id}}"
                class="list-group-item list-group-item-action">
            <div><strong>{{joke.id}}.</strong> {{convertQuotes(joke.joke)}}</div>
        </router-link>
    </div>
</template>

<script>
  export default {
    name: 'JokeItem',

    props: {
      joke: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        id: null
      }
    },

    methods: {
      convertQuotes(string) {
        return string.replace(/&quot;/g, '"');
      }
    }
  }
</script>

<style>
</style>
