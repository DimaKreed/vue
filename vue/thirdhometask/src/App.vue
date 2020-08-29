<template>

<div>

  <ul class="nav nav-pills">
    <router-link class="nav-link" active-class="active" exact to="/" tag="li">Home</router-link>
    <router-link class="nav-link" active-class="active" exact to="/contacts" tag="li">Contacts</router-link>
    <router-link class="nav-link" active-class="active" exact to="/myProjects" tag="li">My Project</router-link>
  </ul>



  <router-view></router-view>

</div>



</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
