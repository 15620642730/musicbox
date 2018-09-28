<template lang="html">
  <div class="zb">
    <div class="zg hasCancel ">
      <router-link tag="i" :to="{name:'SearchView',params:{searchcontent:searchdata}}" class="zh zk"></router-link>
      <input v-model="searchdata" type="search" class="zf" placeholder="搜索你喜欢的音乐" required="required">
      <i id="iconToClear" class="a3s zk"></i>
    </div>
      <router-link tag="span" :to="{name:'SearchView',params:{searchcontent:searchdata}}" class="zi">搜索</router-link>
  </div>
</template>
<script>
export default {
  name:"search",
  data(){
    return{
      searchdata:""
    }
  },
  methods:{
    searchHandler(event){
      console.log(this.searchdata);
    }
  }
}
</script>
<style scoped>

.zb {
    /* position: fixed; */
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
    color: #555;
    font-size: 17px;
    text-align: center;
    transform: translateZ(0);
}

.zg {
    position: absolute;
    left: 15px;
    top: 8px;
    right: 15px;
    background: #fff;
    border-radius: 30px;
    height: 30px;
    padding: 0 20px;
}

.zk {
    background-image: url(//static-o2o.360buyimg.com/daojia/new/images/icon/search_bar_sprites.png);
    background-size: 44px auto;
    background-repeat: no-repeat;
}
.zh {
    position: absolute;
    top: 0;
    left: 0;
    background-position: -5px -7px;
    width: 44px;
    height: 44px;
}

.zf {
    padding-top: 8px;
    padding-bottom: 9px;
    vertical-align: top;
    outline: none;
    border: 1px solid #f1f1f1;
    border-radius: 15px;
    font-family: "microsoft yahei",Verdana,Arial,Helvetica,sans-serif;
    font-size: 14px;
    height: 30px;
    width: 90%;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-left: 10px;
}

.a3s {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    background-position: -12px -140px;
    width: 28px;
    height: 28px;
}
.zk {
    background-image: url(//static-o2o.360buyimg.com/daojia/new/images/icon/search_bar_sprites.png);
    background-size: 44px auto;
    background-repeat: no-repeat;
}
.zi {
    position: absolute;
    right: 15px;
    top: 8px;
    height: 30px;
    display: inline-block;
    -webkit-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px;
    color: #333333;
    font-size: 14px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
}

</style>
