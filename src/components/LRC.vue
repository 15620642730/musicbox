<template lang="html">
  <div class="lrcContainer">
    <div class="lrc" ref="lrc">
      <!-- 歌词：{{ currentTime }}-{{ durationTime }} -->
      <!-- {{ songid }} -->
      <!-- {{ lrcData }} -->
      <!-- lrc文件中的时间与播放获得的时间比较 -->
      {{ getAllKey }}
      <p class="lrc-p" :class="{'active':key < currentTime && key > currentTime - (keyArr[index+1]-keyArr[index])}" v-for="(item,key,index) in lrcData">{{ item }}{{ scrollLrc(key,index) }}</p>
      <!-- <p class="lrc-p" v-show="key < currentTime && key > currentTime - (keyArr[index+1]-keyArr[index])" v-for="(item,key,index) in lrcData">{{ item }}</p> -->
    </div>
  </div>
</template>
<script>
export default{
  name:"lrc",
  data(){
    return{
      lrcData:{},
      keyArr:[]
    }
  },
  props:{
    currentTime:{
      type:Number,
      default:null
    },
    durationTime:{
      type:Number,
      default:null
    },
    songid:{
      type:String,
      default:""
    }
  },
  created(){
    const lrcUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.song.lry&songid="+this.songid
    this.$axios.get(lrcUrl)
    .then(res => {
       this.lrcData = res.data
       // console.log(lrcData);
       var lyrics = res.data.lrcContent.split("\n");
       // console.log(lyrics);
       var lrcObj = {};
       for(var i=0;i<lyrics.length;i++){
         var lyric = decodeURIComponent(lyrics[i]);
         var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
         // \\[(\\d{1,2}):(\\d{1,2}).(\\d{1,2})\\]
         var timeRegExpArr = lyric.match(timeReg);
         // console.log(timeRegExpArr);
         if(!timeRegExpArr)continue;
         var clause = lyric.replace(timeReg,'');
           for(var k = 0,h=timeRegExpArr.length;k<h;k++){
             var t = timeRegExpArr[k];
             var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                 sec = Number(String(t.match(/\:\d*/i)).slice(1));
             var time = min * 60 + sec;
             // console.log(time);
             lrcObj[time] = clause;
             // console.log(lrcObj[time]);
           }
       }
       this.lrcData = lrcObj
       // console.log(this.lrcData);
       // console.log(lrcObj);
    })
    .catch(error => {
      console.log(error);
    })
  },
  computed:{
    //取出所有的key
    getAllKey(){
      for(var allkey in this.lrcData){
        this.keyArr.push(allkey);
      }
    }
  },
  methods:{
    scrollLrc(key,index){
      const lrcDiv = this.$refs.lrc
      if(key < this.currentTime && key > this.currentTime - (this.keyArr[index+1] - this.keyArr[index])){
          lrcDiv.style.top = -((index-2)*30)+"px"
      }
    }
  }
}
</script>
<style scoped>
.lrcContainer{
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: relative;
}

.lrc{
	width: 100%;
  position: absolute;
  top: 0;
}
.active{
	display: block;
  font-size:16px;
  color:	#00BFFF;
}
.lrc-p{
  height: 30px;
	line-height: 30px;
}

.up30{
	margin-top: -30px;
}
</style>
