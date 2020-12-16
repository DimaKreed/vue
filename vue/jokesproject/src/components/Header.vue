<template>
    <div>
        <ul class="nav nav-pills">
            <li class="nav-item">
                <router-link
                        class="nav-link"
                        active-class="active"
                        style="cursor: pointer"
                        exact
                        to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link
                        class="nav-link"
                        active-class="active"
                        style="cursor: pointer"
                        to="/jokes">Jokes</router-link>
            </li>

            <form class="form-inline search" >
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" >Search</button>
            </form>
        </ul>
    </div>
</template>

<script>
    export default {
      name:"Header"
    }
</script>

<style>
.search{
float: right}
</style>
