<template>
  <div class="abnormal-order">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="待发货" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="address" label="地址" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: "AbnormalOrder",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "待发货",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "待发货",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "待发货",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "待发货",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>
