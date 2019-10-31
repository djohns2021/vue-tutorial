<template>
  <div class="home-component">
    <div class="hundo">{{message}}</div>
    <div>bottom</div>
  </div>
</template>

<style lang="scss" scoped>
.home-component {
  height: 100%;
  overflow-y: auto;
}
.hundo {
  height: 100%;
  background-color: green;
}
</style>

<script src="./Home.ts"></script>
