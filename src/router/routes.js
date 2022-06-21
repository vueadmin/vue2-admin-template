import _import from "./importer";
import LayoutHome from "@/Layout/Index.vue";
import IRouteMeta from "@/models/IRouteMeta";

export const navigation = [
  {
    path: "/index",
    name: "Index",
    component: _import("index/Index"),
    meta: new IRouteMeta({
      title: "首页",
      hideTitleInBrowserTab: true,
      hideHomeBreadcrumb: true,
      icon: "el-icon-s-home",
    }),
  },
  {
    path: "/banner",
    name: "Banner",
    component: _import("banner/Index"),
    meta: new IRouteMeta({
      title: "轮播图",
      hideTitleInBrowserTab: true,
      hideHomeBreadcrumb: true,
      icon: "el-icon-s-home",
    }),
  },
  {
    path: "/order",
    name: "Order",
    component: _import("order/Index"),
    meta: new IRouteMeta({
      title: "订单",
      hideTitleInBrowserTab: true,
      hideHomeBreadcrumb: true,
      icon: "el-icon-s-home",
    }),
  },
  {
    path: "/user",
    name: "User",
    component: _import("user/Index"),
    meta: new IRouteMeta({
      title: "用户",
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
