<template lang="html">
  <div class="musiclist">
    <div class="th-tabpanel-item">
      <ul class="th-songlist">
        <router-link :key="index"  :to="{name:'MusicPlay',params:{songid:item.song_id} }" tag="li" class="th-songlist-item" v-for="(item,index) in musicData.song_list">
          <div class="poster">
            <img :src="item.pic_big" :alt="item.title">
          </div>
          <div class="left">
            <div class="info">
              <div class="line1">
                <span class="name">{{ item.title }}</span>
              </div>
              <span class="author">{{ item.author }}</span>
            </div>
          </div>
        </router-link>
      </ul>
      <router-link  tag="div" :to="{name:'Recommend',params:{musictype:musictype}}" class="more-text">查看该榜单 &gt; </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name:"musiclist",
  data(){
    return{
      musicData:{
        song_list:[]
      }
    }
  },
  props:{
    musictype:{
      type:String,
      default:"1"
    }
  },
  created(){
    const MusicListUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.musictype+"&size=5&offset=0"
    this.$axios.get(MusicListUrl)
    .then(res => {
      // console.log(res.data);
      this.musicData = res.data
    })
    .catch(error => {
      console.log(error);
    })
  }
}
</script>
<style lang="css">

.th-tabpanel-item {
    padding: 10px 17px;
    background-color: #fff;

   -webkit-flex-shrink: 0;
   flex-shrink: 0;
   width: 100%;
 }

 .th-songlist {
     width: 100%;
     word-wrap: break-word;
     -webkit-hyphens: auto;
     hyphens: auto;
     word-break: break-all;
     list-style: none;
     /* height:320px; */
}

.th-songlist-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: left;
    min-height: 55px;
    padding: 7px 0;
    border-bottom: 1px solid #f2f2f2;
}

.poster {
    position: relative;
    width: 45px;
    margin-right: 8px;
}

.left {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 0%;
    flex: 1 1 0%;
}

.info {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 0%;
    flex: 1 1 0%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1;
}

.line1 {
    min-height: 22px;
}

.name {
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
}

.author {
    font-size: 12px;
    color: #999;
}

.more-text{
    color: #999;
    display: block;
    margin-top: 9px;
    font-size: 1.2rem;
    text-align: center;
    height: 32px;
    line-height: 32px;
}

</style>
