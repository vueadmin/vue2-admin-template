import _import from "./importer";
import LayoutHome from "@/Layout/Index.vue";
import IRouteMeta from "@/models/IRouteMeta";

export const navigation = [
  {
    path: "",
    alias: ["index", "dashboard"],
    name: "Index",
    component: _import("index/Index"),
    meta: new IRouteMeta({
      title: "navigation.index",
      hideTitleInBrowserTab: true,
      hideHomeBreadcrumb: true,
      icon: "el-icon-s-home",
    }),
  },
];

export default [
  {
    path: "/",
    name: "LayoutHome",
    redirect: { name: "Index" },
    component: LayoutHome,
    meta: new IRouteMeta({ hideInBreadcrumb: true }),
    children: [...navigation],
  },
  {
    path: "/login",
    name: "Login",
    component: _import("Login/Index"),
    meta: new IRouteMeta({ title: "登录" }),
  },
  { path: "*", redirect: { name: "Error404" } },
];
