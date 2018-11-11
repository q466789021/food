<template>
    <div class="default-layout">
        <div class="container">
            <slot></slot>
        </div>
        <NavBar></NavBar>
        <BackTop></BackTop>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
  name: "DefaultLayout",
  components: {
      NavBar,
  }
};
</script>

<style lang='scss' scoped>
.default-layout {
  .container {
    padding-bottom: 98px + 24px;
  }
}
</style>
