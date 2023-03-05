<template>
  <div class="sticky-top">
    <nav class="navbar navbar-dark justify-content-between flex-nowrap flex-row">
      <div class="container">
        <router-link to="/" class="navbar-brand float-left">Project MongoDB</router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link to="/" class="nav-link px-2">Create Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/view" class="nav-link px-2">View Menu</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="container">
    <br>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .navbar {
    background-color: #E4AE57;
  }
</style>
