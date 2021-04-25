<!--
 * @Descripttion: 
 * @version: 
 * @Author: stride
 * @Date: 2021-04-22 13:48:20
 * @LastEditors: stride
 * @LastEditTime: 2021-04-22 14:47:11
-->
<template>
  <div class="Rules">
    <van-cell title="尺码对照表"/>
    <table>
      <tbody>
        <tr>
          <th v-for="(item,index) in thead" :key="index">{{item}}</th>
        </tr>
        <tr v-for="(tr,index) in tbody" :key="index">
          <td v-for="(td,index) in tr" :key="index">{{td}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Rules",
  data() {
    return {
      thead:['EU','UK','CM','US'],
      tbody:[
       ['36','6.5','5.5','245'],
        ['40','7','6','250'],
        ['41','8','7','255'],
        ['42','8.5','7.5','260'],
        ['43','9','8','265'],
        ['44','10','9','270'],
        ['45','10.5','9.5','275'],
        ['46','11','10','280'],
        ['46','12','11','285'],
      ]
    };
  },
  props:{

  },
  computed: {},
  methods: {

  },
  mounted() {

  },
  watch: {},
};
</script>

<style lang="less" scoped>
.Rules {
  padding: 14px;
  width: calc(100% - 16px - 18px);
   border-bottom: 10px solid #f5f4f9;
  .van-cell {
    padding: 3px;
  }
}
/deep/ .van-cell__title {
  span {
    font-size: 16px;
    font-weight: 700;
  }
}
table {
  width: 100%;
  border-collapse: collapse;
}
table, th, td {
 text-align: center;
 padding: 4px;
 font-weight: 400;
 font-size: 14px;
}
table tr:nth-child(odd){
  background-color: #f5f4f9;
}
</style>