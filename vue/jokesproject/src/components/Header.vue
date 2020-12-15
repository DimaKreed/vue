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
                        style="cursor: pointer"
                        active-class="active"
                        to="jokes">Jokes</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
      name:"Header"
    }
</script>

<style>

</style>
