<template>
  <div class="header">
    <el-avatar :size="36" :src="url"></el-avatar>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
  data() {
    return {
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  height: 60px;
}
</style>
