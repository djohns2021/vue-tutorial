<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
    <div class="router-view">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
}

#nav {
  height: 64px;
  line-height: 64px;
  background-color: cornflowerblue;
}

.router-view {
  width: 100%;
  height: calc(100% - 64px);
}

#app {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
