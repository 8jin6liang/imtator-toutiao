<template>
  <div class="home-container">
    <!-- 导航栏 搜索 -->
    <van-nav-bar class="home-nav-bar">
      <van-button class="search-btn" slot="title" type="info" round
        size="small">
        <i slot="icon" class="iconfont icon-sousuo"></i>
        <span class="text" slot="default">搜索</span>
      </van-button>
    </van-nav-bar>

    <!-- tab标签页 -->
    <van-tabs class="channel-tabs" v-model="active" animated swipeable
      swipe-threshold="3">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <!-- <van-tab title="标签 5">内容 5</van-tab> -->
      <!-- <van-tab title="标签 5">内容 5</van-tab> -->
      <div slot="nav-right" class="hamburger-btn">
        <i class="iconfont icon-gengduo"></i>
      </div>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      active: 0
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.home-container {
  /deep/.home-nav-bar {
    background-color: rgb(42, 148, 255);
    .van-nav-bar__title {
      max-width: unset;
      .search-btn {
        width: 277.5px;
        height: 32px;
        background: #5babfb;
        border: none;
        .text {
          font-size: 14px;
        }
        .icon-sousuo {
          font-size: 16px;
        }
      }
    }
  }
  /deep/.channel-tabs {
    .van-tabs__wrap {
      height: 41px;
      .van-tabs__nav--line {
        padding-right: 32px;
        .van-tab {
          min-width: 100px;
          font-size: 15px;
          color: #777;
          border-right: 1px solid #edeff3;
          &.van-tab--active {
            color: #333;
          }
        }
        .van-tabs__line {
          bottom: 19px;
          width: 15.5px;
          height: 3px;
          background-color: #3296fa;
        }
      }
    }
    .hamburger-btn {
      position: fixed;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33px;
      height: 41px;
      background-color: #fff;
      opacity: 0.902;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 1px;
        height: 75%;
        background: url(~@/assets/gradient-gray-line.png);
        background-size: contain;
      }
      i.iconfont {
        font-size: 16.5px;
      }
    }
  }
}
</style>
