<template lang="html">
  <ul class="th-tabbar">
    <li class="th-tabbar-item selected">
      <div class="th-tabbar-item-text">
        <router-link to="/hot">热歌榜</router-link>
      </div>
    </li>
    <li class="th-tabbar-item">
      <div class="th-tabbar-item-text">
        <router-link to="/new">新歌榜</router-link>
      </div>
    </li>
    <li class="th-tabbar-item">
      <div class="th-tabbar-item-text">
        <router-link to="/king">经典老歌榜</router-link>
        </div>
    </li>
  </ul>
</template>
<script>
export default {

}
</script>
<style scoped>

.th-tabbar {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}

.th-tabbar li.th-tabbar-item.selected {
    color: #e13228;
}

.th-tabbar-item-text {
    border-right: 1px solid #eee;
}
.th-tabbar-item-text {
    color: #666;
}

.th-tabbar-item {
    padding: 18px 0 12px;
    font-size: 16px;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 0%;
    flex: 1 1 0%;
    text-align: center;
    color: #999;
    position: relative;
    border-bottom: 1px solid #eee;
}

.th-tabbar-item-text {
    border-right: 1px solid #eee;
}

.th-tabbar-item-text {
    border-right: none;
}











</style>
