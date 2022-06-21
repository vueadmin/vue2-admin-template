<template>
  <div class="aside">
    <el-menu
      :default-active="defaultActive"
      router
      @select="handleSelect"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item
        v-for="route in routes"
        :index="route.path"
        :key="route.path"
      >
        <i :class="route.meta.icon"></i>
        <span slot="title">{{ route.meta.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AsideView",
  data() {
    return {
      defaultActive: "/index",
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style></style>
