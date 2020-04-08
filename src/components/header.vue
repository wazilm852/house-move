<template>
  <div class="header">
    <div class="header-box">
      <div class="pic">
        <img src="../assets/img/logo.png" alt="">
        <span>杭州微助速律信息技术有限公司</span>
      </div>
      <!-- <ul class="jump">
        <router-link tag="li" :to="{path: '/'}">首页</router-link>
        <router-link tag="li" :to="{path: '/###'}">联系我们</router-link>
        <router-link tag="li" :to="{path: '/##'}">关于我们</router-link>
        <router-link tag="li" :to="{path: '/#'}">加入我们</router-link>
      </ul> -->
    </div>

     <!-- // 小屏幕显示header -->


    <div class="s-header">
      <div class="top">
        <div class="s-logo">
          <img src="../assets/img/logo.png" alt="">
          <span>杭州微助速律信息技术有限公司</span>
        </div>
        <!-- <Icon v-if="flag" class="icon" @click="close" type="md-close" size="24" />
        <Icon v-else class="icon" @click="open" type="ios-menu" size="24" /> -->
      </div>
      <!-- <transition name="slide-fade">
        <ul class="select" v-show="flag">
          <router-link tag="li" :to="{path: '/'}">首页</router-link>
          <router-link tag="li" :to="{path: '/###'}">联系我们</router-link>
          <router-link tag="li" :to="{path: '/##'}">关于我们</router-link>
          <router-link tag="li" :to="{path: '/#'}">加入我们</router-link>
        </ul>
      </transition> -->
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        flag: false,   //控制折叠面板打开与关闭
      }
    },
    methods: {
      open() {
        this.flag = true
      },
      close() {
        this.flag = false
      }
    },
  };
</script>
<style scoped lang="less">

  .header{
    width: 100%;
    color: #777777;
    .header-box{
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      color: #777777;
      display: flex;
      justify-content: space-between;
      .pic{
        height: 100%;
        line-height: 96px;
        display: flex;
        align-items: center;
        img{
          width: 40px;
          margin-right: 20px;
        }
        span{
          line-height: 96px;
        }
      }
      .jump{
        display: flex;
        li{
          height: 100%;
          line-height: 96px;
          width: 100px;
          text-align: center;
          cursor: pointer;
        }
        li:hover{
          color: #333;
        }
        .router-link-exact-active{
          color: #333333;
        }
      }
    }
    
    // 小屏幕显示header
    .s-header{
      display: none;
      width: 100%;
      min-height: 96px;
      .top{
        width: 100%;
        height: 96px;
        line-height: 96px;
        padding-right: 40px;
        padding-left: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .s-logo{
          // width: 40px;
          img{
            width: 40px;
            vertical-align: middle;
            margin-right: 10px;
          }
        }
        .icon{
          cursor: pointer;
          color: #333;
        }
      }
      .select{
        width: 100%;
        text-align: left;
        text-indent: 2em;
        z-index: 2;
        // padding-left: 20px;
        li{
          height: 50px;
          line-height: 50px;
          border-bottom:1px solid #80808033;
          cursor: pointer;
          font-size: 14px;
        }
      }


      .slide-fade-enter-active {
        transition: all .3s ease;
      }
      .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      }
      .slide-fade-enter, .slide-fade-leave-to
      /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
      }


    }
  }


  // 媒体查询
  @media screen and (min-width:992px) and (max-width:1200px){
    .header{
      .header-box{
        width: 90%;
      }
      .s-header{
        display: none;
      }
    }
  }
  @media screen and (min-width:768px) and (max-width:992px){
    .header{
      .header-box{
        display: none;
      }
      .s-header{
        display: block;
      }
    }
  }

  @media screen and (min-width:576px) and (max-width:768px){
    .header{
      .header-box{
        display: none;
      }
      .s-header{
        display: block;
      }
    }
  }

  @media screen and (max-width:576px){
    .header{
      .header-box{
        display: none;
      }
      .s-header{
        display: block;
      }
    }
  }
</style>
