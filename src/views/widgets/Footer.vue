<template>
  <footer class="footer">
    <span class="copyright">&copy; {{ new Date().getFullYear() }}</span>
    <el-divider direction="vertical"></el-divider>
    <a
      class="link"
      href="https://github.com/https://github.com/vueadmin/vue2-admin-template"
      target="_blank"
      >Github
    </a>
    <el-divider direction="vertical"></el-divider>
  </footer>
</template>

<script>
export default {
  name: "FooterHome",
};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  color: #666;
  font-size: 14px;

  .link {
    text-decoration: none;

    &:link,
    &:visited {
      color: #666;
    }

    &:hover,
    &:active {
      color: #477fe3;
    }
  }
}
</style>
