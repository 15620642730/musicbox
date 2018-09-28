<template lang="html">
  <div class="silder">
    <swiper :options="swiperOption">
    <swiper-slide><img src="../assets/banner/b1.jpg"></swiper-slide>
    <swiper-slide><img src="../assets/banner/b2.jpg"></swiper-slide>
    <swiper-slide><img src="../assets/banner/b3.jpg"></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
  </swiper>
  </div>
</template>
<script>
export default{
  name:"silder",
  data(){
    return{
      swiperOption:{
        pagination: {
          el: '.swiper-pagination',
        },
        loop:true
      }
    }
  }
}
</script>
<style scoped>

.slider .swiper-pagination-bullet-active{
  background: red;
}

</style>
