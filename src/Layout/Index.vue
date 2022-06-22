<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px"><AsideView /></el-aside>
      <el-container>
        <el-header><HeaderView /></el-header>
        <el-main><MainView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideView from "@/Layout/components/AsideView.vue";
import HeaderView from "@/Layout/components/HeaderView.vue";
import MainView from "@/Layout/components/MainView.vue";
export default {
  name: "LayoutHome",
  components: {
    AsideView,
    HeaderView,
    MainView,
  },
};
</script>

<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  background-color: #fff;
}

.el-header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
