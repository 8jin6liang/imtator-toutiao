<template>
  <div class="login">
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="goBack" />
    <van-form ref="loginForm" @submit="onSubmit">
      <van-field name="手机号" placeholder="手机号" v-model="user.mobile"
        type="number" maxlength="11" :rules="userFormRules.mobile">
        <i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>
      <van-field name="验证码" placeholder="验证码" v-model="user.code" type="number"
        maxlength="6" :rules="userFormRules.code">
        <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
        <template #button>
          <van-button round native-type="button" size="small" type="primary"
            class="code" @click="onSendCode">发送验证码
          </van-button>
        </template>
      </van-field>
      <div class="submit-btn">
        <van-button block type="info" native-type="submit">
          登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user.js'

export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      userFormRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3|5|7|8]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /\d{6}/, message: '验证码格式错误' }
        ]
      }
    }
  },
  methods: {
    async onSubmit (values) {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const { data } = await login(this.user)
        this.$store.commit('setUser', data.data)
        this.$toast.success('登录成功')
        this.$router.back()
      } catch (err) {
        console.log('失败信息', err)
        if (err.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        } else {
          this.$toast.fail('登录失败,请稍后再试')
        }
      }
    },
    onSendCode () {
      this.$refs.loginForm.validate('手机号')
    },
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.van-nav-bar {
  background-color: rgb(42, 148, 255);
  .van-nav-bar__left {
    .van-icon,
    .van-nav-bar__text {
      color: #fff;
    }
  }
  .van-nav-bar__title {
    color: #fff;
  }
}
.code {
  width: 76px;
  height: 23px;
  line-height: 23px;
  font-size: 11px;
  color: rgb(117, 117, 117);
  white-space: nowrap;
  background-color: #ededed;
  border: none;
}
.submit-btn {
  margin: 26px 16px;
  .van-button--info {
    background-color: rgb(80, 154, 233);
    border-radius: 4px;
    border: none;
  }
}
.iconfont {
  font-size: 18px;
}
</style>
