<template lang="html">

  <router-link :to="{name:'SingerInfo',params:{singerid:singerid}}" tag="div" class="col col-4">
    <div class="li-wrapper">
      <div class="img-wrapper">
        <img :src="singerInfo.avatar_big" :alt="singerInfo.name">
      </div>
      <div class="th-ellipsis main">{{ singerInfo.name }}:{{ singerInfo.country }}</div>
    </div>
  </router-link>
</template>
<script>
export default {
  name:"singerlist",
  data(){
    return{
      singerInfo:{}
    }
  },
  props:{
    singerid:{
      type:String,
      default:"0"
    }
  },
  created(){
    const SingerUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid="+this.singerid
    this.$axios.get(SingerUrl)
    .then(res => {
      // console.log(SingerUrl)
      this.singerInfo = res.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>
<style lang="css">

.col-4 {
    -webkit-flex-basis: 33.33333333%;
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
}

.li-wrapper{
    position: relative;
    margin-bottom: 18px;
    font-size: 1.2rem;
    padding: 0 5px;
}

.li-wrapper .img-wrapper[data-v-e463e372] {
    position: relative;
    height: 0;
    padding-bottom: 100%;
    background-color: #eee;
}

element.style {
    text-overflow: initial;
    white-space: normal;
    max-height: 2.8rem;
}

.li-wrapper .main[data-v-e463e372] {
    margin-top: 4px;
    line-height: 1.4rem;
}
.th-ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

</style>
