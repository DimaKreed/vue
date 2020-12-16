<template>
    <div>
        <p>single joke</p>
        <button @click="navigateToJokeList">Back to joke list</button>
    </div>

</template>

<script>
  export default {
    name: "JokeInfo",

    data() {
      return {}
    },
    methods: {
      navigateToJokeList() {
        this.$router.push({name: 'JokesList'})
      }
    }
  }

</script>
