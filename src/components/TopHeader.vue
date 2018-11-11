<template>
    <div class="header" :class="handleClass">
        <div class="left">
            <slot name="left">
                <div class="back" @click="back">
                    <i class="icon-angle-left"></i>
                </div>
            </slot>
        </div>
        <div class="center">
            <slot name="center">
                <div class="title">
                    {{title}}
                </div>
            </slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: "TopHeader",
  props: {
    title: {
      type: String
    },
    bgColor: {
      type: String,
      default: "orange"
    }
  },
  computed: {
    handleClass() {
      return this.bgColor;
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";

.header {
  
  display: flex;
  height: 88px;
  &.orange {
    background: color(orange);
    color: #fff;
  }
  &.white {
    background: #fff;
    color: #333;
  }
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 4;
  }
  .left,
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
}
</style>
