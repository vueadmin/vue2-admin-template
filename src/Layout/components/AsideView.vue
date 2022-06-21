<template>
  <div class="aside">
    <el-menu
      :default-active="defaultActive"
      router
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item
        v-for="route in routes"
        :index="route.path"
        :key="route.path"
      >
        <i :class="route.mate.icon"></i>
        <span slot="title">{{ route.mate.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AsideView",
  data() {
    return {
      defaultActive: "/token",
      routes: [],
    };
  },
  created() {
    this.routes = this.$router.options.routes[0].children;
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style></style>
