<template>
  <div class='card-component'>
    <h2>
      <slot name='title' v-if='title'></slot>
    </h2>
    <h3>
      <slot name='sub-title' v-if='sub-title'></slot>
    </h3>
    <div>
      <slot name='body' v-if='body'></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.card-component {
  width: 100%;
  height: 100%;

  background: #fff;
  border-radius: 2px;
  display: inline-block;
  margin: 1rem;
  position: relative;
}
h2 {

}
h3 {

}
div {

}

</style>