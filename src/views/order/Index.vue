<template>
  <div class="order">
    <div class="order-tabs">
      <el-tabs
        v-model="currentTabComponent"
        type="card"
        @tab-click="handleClick"
      >
        <el-tab-pane
          v-for="tab in tabList"
          :key="tab.name"
          :label="tab.label"
          :name="tab.name"
        />
      </el-tabs>
      <component :is="currentTabComponent"></component>
    </div>
  </div>
</template>

<script>
import awaitPay from "./components/awaitPay";
import awaitDeliver from "./components/awaitDeliver";
import doneDeliver from "./components/doneDeliver";
import receivedGoods from "./components/receivedGoods";
import abnormalOrder from "./components/abnormalOrder";
export default {
  name: "OrderView",
  data() {
    return {
      tabList: [
        {
          label: "待付款",
          name: "awaitPay",
        },
        {
          label: "待发货",
          name: "awaitDeliver",
        },
        {
          label: "已发货",
          name: "doneDeliver",
        },
        {
          label: "已收货",
          name: "receivedGoods",
        },
        {
          label: "异常订单",
          name: "abnormalOrder",
        },
      ],
      currentTabComponent: "awaitPay",
    };
  },
  components: {
    awaitPay,
    awaitDeliver,
    doneDeliver,
    receivedGoods,
    abnormalOrder,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
