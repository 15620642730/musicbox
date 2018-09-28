<template lang="html">
  <div class=".collection-block">
    <div class="block-padding">
      <div class="title">
        <h3>热门歌单</h3>
      </div>
      <div class="row row--flex">
        <SingerList :key="index" v-for="(item,index) in singerListData" :singerid="item" />
      </div>
    </div>
  </div>
</template>
<script>

import SingerList from "../components/SingerList"
export default{
  name:"singer",
  data(){
    return{
      singerListData:["2517","1097","1376","1226","340442495","1133"]
    }
  },
  components:{
    SingerList
  }
}
</script>
<style scoped>
/* * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
} */

.collection-block{
    background-color: #f8f8f8;
    padding-bottom: 10px;

}

.block-padding {
    padding: 10px 17px;
    background-color: #fff;
    margin-top:10px;
    width:100%;
}

.title{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    margin: 14px 0 18px;
}

.title h3{
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 0%;
    flex: 1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1;
}

.row {
  /* background-color: #f8f8f8;
  padding-bottom: 10px; */

      /* padding: 10px 17px;
      background-color: #fff; */

    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    /* margin-right: -5px;
    margin-left: -5px; */
}



</style>
