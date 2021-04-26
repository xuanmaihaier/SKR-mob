<template>
  <div class="addMain">
    <div class="tips">
      <p>为提高配送时效，请您尽量准确填写四级地址。</p>
    </div>
    <div class="info">
      <van-address-edit
        :area-list="areaList"
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import areaList from "assets/area/area";
import { Toast } from "vant";
export default {
  name: "AddMain",
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  methods: {
    onSave(val) {
      Toast("save");
      let detailAdd =
        val.province +
        " " +
        val.city +
        " " +
        val.county +
        " " +
        val.addressDetail;
      // 添加地址
      this.$store.dispatch("doAddAddress", {
        id: 1,
        customer_id: 1,
        name: val.name,
        tel: val.tel,
        address: detailAdd,
        prime: val.isDefault,
      });
      this.$router.push('/selectAddress')

    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: val,
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style lang='less' scoped>
.addMain {
  box-sizing: border-box;
  .tips {
    text-align: center;
    padding: 1rem;
    p {
      font-size: 3vw;
      color: #aeaeae;
    }
  }
}
/deep/ .van-button--danger {
  background-color: #fff;
  color: #000;
  border-color: #aeaeae;
  width: 70%;
  margin: 0 auto;
}
</style>