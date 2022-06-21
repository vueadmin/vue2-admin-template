<template>
  <div class="login">
    <div class="wrapper">
      <h1 class="header">{{ projectName }}</h1>

      <el-form
        class="form"
        size="large"
        ref="form"
        :model="form"
        :rules="formRules"
        :disabled="isSubmitting"
      >
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
            v-model="form.username"
            @keydown.enter.native="onLogin"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="form.password"
            @keydown.enter.native="onLogin"
          ></el-input>
        </el-form-item>
      </el-form>

      <el-button
        size="large"
        type="primary"
        :loading="isSubmitting"
        @click="onLogin"
      >
        登录
      </el-button>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import Permission from "../../utils/Permission";
import PageFooter from "../widgets/Footer";

export default {
  name: "LoginView",

  components: { PageFooter },

  data() {
    return {
      isSubmitting: false,
      projectName: process.env.VUE_APP_PROJECT_NAME,
      form: {
        username: "admin",
        password: "123456",
      },
      formRules: {
        username: [
          {
            required: true,
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    async onLogin() {
      try {
        await this.$refs.form.validate();
      } catch {
        return;
      }

      try {
        this.isSubmitting = true;

        await Permission.login({
          username: this.form.username,
          password: this.form.password,
        });

        await this.$router.push({ name: "Index" });
      } catch (e) {
        this.$message.error("login_failed");
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
  justify-content: space-between;

  .wrapper {
    margin: 200px auto;
    background-color: #fff;
    padding: 30px;
    width: 480px;
    border-radius: 8px;

    .header {
      font-size: 24px;
      text-align: center;
      margin: 0;
      padding: 0;
      font-weight: normal;
    }

    .form {
      margin-top: 40px;
    }
  }

  .footer {
    margin-bottom: 32px;
  }

  .language_selector {
    position: fixed;
    right: 32px;
    top: 32px;
  }
}
</style>
