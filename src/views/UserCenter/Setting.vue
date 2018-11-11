<template>
    <div class="setting">
    <TopHeader title="设置" class="white"></TopHeader>
    <CellList>
      <Cell title="账户与安全" showArrow></Cell>
      <Cell title="新消信通知" showArrow></Cell>
      <Cell title="地区设置" showArrow></Cell>
      <Cell title="隐私" showArrow></Cell>
    </CellList>
    <CellList>
      <Cell title="我的反馈" showArrow></Cell>
      <Cell title="关于美食连锁店" showArrow></Cell>
    </CellList>
    <FoodButton block class="login-out" @click="logOut">退出登录</FoodButton>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Setting",

  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },

  methods: {
    logOut() {
      if (window.confirm(`是否退出当前登录`)) {
        this.$router.push("/home");
        this.$store.state.token = "";
        this.$store.state.userInfo = {};
        this.$store.state.addrdee = null;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.setting {
  .login-out {
    width: 526px;
    height: 80px;
    margin: 86px auto;
  }
}
</style>
