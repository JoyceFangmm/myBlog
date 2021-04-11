<template>
  <div id="app">
    <div id="nav" class="navbar">
      <div class="nav-container flex">
        <router-link to="/" class="brand router-link">Joyce Blog</router-link>
        <div class="navbar-right flex">
          <router-link to="/" class="router-link">Home</router-link>
          <router-link to="/tags" class="router-link">Tags</router-link>
          <router-link to="/category" class="router-link">Category</router-link>
          <router-link to="/about" class="router-link">About</router-link>
          <div class="router-link lang">English</div>
        </div>
      </div>
    </div>

    <el-container>
      <el-main style="padding:0">
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>

  </div>
</template>

<style lang="scss">
@import './styles/base.css';
@import './styles/common.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}

.navbar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 1000;
}

.navbar .nav-container{
  position: relative;
}


.navbar .router-link{
  color: white;
  font-weight: 800;
  padding: 20px;
  letter-spacing: 1px;
  font-size: 12px;
}

.navbar .router-link.brand{
  font-size: 18px;
}

.navbar .navbar-right{
}

</style>
