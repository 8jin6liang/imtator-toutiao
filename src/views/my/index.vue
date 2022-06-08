<template>
  <div class="my-container">
    <!-- 未登录 -->
    <div v-if="!user" class="header not-login">
      <div class="login-btn" @click="toLogin">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="">
        <span class="text">登录 / 注册</span>
      </div>
    </div>

    <!-- 登录 -->
    <div v-else class="header user-info">
      <!-- 用户基础信息 -->
      <div class="base-info">
        <div class="left">
          <van-image class="avatar" round fit="cover" :src="userInfo.photo" />
          <span class="user-name">{{userInfo.name}}</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <!-- 用户其他数据 -->
      <ul class="data-stats">
        <li class="data-item">
          <span class="count">{{userInfo.art_count}}</span>
          <span class="text">头条</span>
        </li>
        <li class="data-item">
          <span class="count">{{userInfo.follow_count}}</span>
          <span class="text">关注</span>
        </li>
        <li class="data-item">
          <span class="count">{{userInfo.fans_count}}</span>
          <span class="text">粉丝</span>
        </li>
        <li class="data-item">
          <span class="count">{{userInfo.like_count}}</span>
          <span class="text">获赞</span>
        </li>
      </ul>
    </div>

    <!-- 主导航 -->
    <van-grid class="grid-nav" :column-num="2" clickable>
      <van-grid-item class="grid-item">
        <i slot="icon" class="iconfont icon-shoucang"></i>
        <span slot="text" class="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="iconfont icon-lishi"></i>
        <span slot="text" class="text">历史</span>
      </van-grid-item>
    </van-grid>

    <!-- 其他功能 -->
    <van-cell-group class="cell-group">
      <van-cell class="cell-item" title="消息通知" is-link />
      <van-cell class="cell-item" title="小智同学" is-link />
    </van-cell-group>

    <!-- 退出登录 -->
    <van-button v-if="user" class="logout-btn" type="default" block
      @click="onLogOut">退出登录
    </van-button>

  </div>
</template>

<script>
import { getUserInfo } from '@/api/user.js'
import { mapState } from 'vuex'
export default {
  name: 'My',
  data () {
    return {
      userInfo: {}
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    },
    onLogOut () {
      this.$dialog.confirm({
        title: '确认退出吗？'
      }).then(() => {
        // 确认操作
        this.$store.commit('setUser', null)
      }).catch(() => {
        // 取消操作
        // on cancel
      })
    },
    async loadUserInfo () {
      try {
        const { data } = await getUserInfo(this.user.token)
        this.userInfo = data
      } catch (error) {
        this.$toast('获取数据失败，请稍后重试')
      }
    }
  },
  created () {
    if (this.user) {
      this.loadUserInfo()
    }
  }
}
</script>

<style lang="less" scoped>
.my-container {
  .header {
    height: 180px;
    background: url('~@/assets/banner.png');
    background-size: cover;
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .mobile-img {
        margin-bottom: 7.5px;
        width: 66px;
        height: 66px;
      }
      .text {
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .user-info {
    .base-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      height: 115px;
      padding: 38px 16px 12px;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          margin-right: 12px;
          width: 66px;
          height: 66px;
          border: 1px solid #fff;
          box-sizing: border-box;
        }
        .user-name {
          font-size: 15px;
          color: #fff;
        }
      }
    }
    .data-stats {
      display: flex;
      height: 65px;
      .data-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        .count {
          font-size: 18px;
        }
        .text {
          font-size: 12px;
        }
      }
    }
  }
  .grid-nav {
    .grid-item {
      height: 71px;
      i.iconfont {
        font-size: 23px;
      }
      .icon-shoucang {
        color: #eb5253;
      }
      .icon-lishi {
        color: #ff9d1d;
      }
      span.text {
        font-size: 14px;
      }
    }
  }
  .cell-group {
    margin: 4px 0;
  }
  .logout-btn {
    color: #eb5253;
    border: none;
  }
}
</style>
