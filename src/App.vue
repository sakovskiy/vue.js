<template>
  <div id="app">
    <div class="row">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Posts</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/photos" class="nav-link">Photos</router-link>
        </li>
      </ul>
    </div>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>

<style scoped>
  .nav-item .router-link-exact-active{
    color: #fff;
    background-color: #007bff;
  }

</style>
