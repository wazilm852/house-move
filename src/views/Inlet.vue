<template>
  <div class="Inlet">
    <!-- pc端 -->
    <div class="content">
      <carousel-3d
        :autoplay="false"
        :width="1300"
        :height="700"
        :perspective="0"
        :space="200"
        :controlsVisible="true"
        :inverseScaling="100"
      >
        <slide :key="0" :index="0">
          <div class="center">
            <div class="left">
              <div class="logo">
                <img src="../assets/img/logo.png" alt class="logo-pic" />
                标准搬家
              </div>
              <div class="ornament1">
                <Icon type="md-add" />
              </div>
              <div class="text">
                <div
                  class="introduce"
                >一站式搬家与i展示一站式搬家与i展示一站式搬家与i展示一站式搬家与i展示一站式搬家与i展示一站式搬家与i展示一站式搬家与i展示一站式搬家与i展示。</div>
                <h1>一站式搬家</h1>
              </div>
              <div class="btn-left" @click="next(0)">立即下单</div>
              <p class="text-p">S T A N D A R D</p>
            </div>
            <div class="right">
              <div class="white-block"></div>
              <span class="number">01</span>
              <div class="bottom">
                <p class="text-p">R E L O C A T I O N</p>
              </div>
            </div>
          </div>
        </slide>
        <slide :key="1" :index="1">
          <div class="center center2">
            <div class="left">
              <div class="logo">
                <img src="../assets/img/logo.png" alt class="logo-pic" />
                标准搬家
              </div>
              <div class="ornament1">
                <Icon type="md-add" />
              </div>
              <div class="text">
                <div
                  class="introduce"
                >快捷式搬家。快捷式搬家。快捷式搬家。快捷式搬家。快捷式搬家。快捷式搬家。快捷式搬家。快捷式搬家。快捷式搬家。快捷式搬家。快捷式搬家</div>
                <h1>快捷式搬家</h1>
              </div>
              <div class="btn-left" @click="next(1)">立即下单</div>
              <p class="text-p">S T A N D A R D</p>
            </div>
            <div class="right">
              <div class="white-block"></div>
              <span class="number">02</span>
              <div class="bottom">
                <p class="text-p">R E L O C A T I O N</p>
              </div>
            </div>
          </div>
        </slide>
      </carousel-3d>
    </div>
    <!-- 移动端 -->
    <div class="small-content">
      <carousel-3d
        :autoplay="false"
        :width="670"
        :height="840"
        :perspective="0"
        :space="100"
        :controlsVisible="false"
        :inverseScaling="100"
      >
        <slide :key="0" :index="0">
          <div class="center one">
            <div class="bg">
              <div class="logo">
                <img src="../assets/img/logo.png" alt class="logo-pic" />
                标准搬家
              </div>
              <div class="pages">
                <div class="page page-color">
                  <div class="box"></div>
                </div>
                <div class="page">
                  <div class="box"></div>
                </div>
              </div>
            </div>
            <div class="text">
              <h1>一站式搬家</h1>
              <p>一站式搬家与i展示一站式搬家与i展示一站式搬家与i展示i展示一站式搬家与i展示一站式搬家与i展示一站式搬家与i展示。</p>
              <div class="btn" @click="next(0)">立即下单</div>
            </div>
          </div>
        </slide>
        <slide :key="1" :index="1">
          <div class="center">
            <div class="bg">
              <div class="logo">
                <img src="../assets/img/logo.png" alt class="logo-pic" />
                标准搬家
              </div>
              <div class="pages">
                <div class="page">
                  <div class="box"></div>
                </div>
                <div class="page page-color">
                  <div class="box"></div>
                </div>
              </div>
            </div>
            <div class="text">
              <h1>快捷式搬家</h1>
              <p>快捷式搬家快捷式搬家快捷式搬家快捷式搬家快捷式搬家快捷式搬家快捷式搬家快捷式搬家快捷式搬家快捷式搬家快捷式搬家</p>
              <div class="btn" @click="next(1)">立即下单</div>
            </div>
          </div>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import Carousel3d from "../components/Carousel3d/Carousel3d.vue";
import Slide from "../components/Carousel3d/Slide.vue";
export default {
  components: {
    Carousel3d,
    Slide
  },
  data() {
    return {};
  },
  methods: {
    next(number) {
      console.log(number)
      this.$router.push({name: 'Form', query: {number: number}})
    }
  }
};
</script>

<style scoped lang="less">
.Inlet {
  width: 100%;
  height: 100%;
  background-color: #dfdfdf;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早期浏览器*/
  -moz-user-select: none; /*火狐*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
  .content {
    width: 100%;
    height: 100%;
    padding-top: 120px;
    padding: 100px 50px;
    .carousel-3d-slide {
      background-color: #fff;
      border: 0;
      border-radius: 50px;
      box-shadow: 0px 38px 46px 0px rgba(246, 202, 46, 0.26);
      .center {
        width: 100%;
        height: 100%;
        display: flex;
        box-shadow: 0px 22px 46px 0px rgba(246, 202, 46, 0.26);
        .left {
          width: 40%;
          height: 100%;
          position: relative;
          background-color: #ffd02c;
          .logo {
            padding: 50px 0 0 50px;
            font-size: 16px;
            color: #333333;
            .logo-pic {
              width: auto;
              vertical-align: middle;
              margin-right: 6px;
            }
          }
          .text-p {
            width: 100%;
            font-size: 20px;
            color: #ffffff;
            padding-bottom: 20px;
            position: absolute;
            left: 0;
            bottom: 0;
            text-align: right;
            padding-right: 10px;
          }
          .ornament1 {
            font-size: 24px;
            color: #aaaaaa;
            position: absolute;
            top: 110px;
            left: 200px;
          }
          .ornament2 {
            font-size: 24px;
            color: #ffd02c;
            position: absolute;
            top: 160px;
            left: 300px;
          }
          .text {
            width: 220px;
            height: 216px;
            margin: 0 auto;
            margin-top: 140px;
            display: flex;
            justify-content: space-around;
            .introduce {
              width: 88px;
              writing-mode: vertical-rl;
              text-indent: 2em;
              font-size: 14px;
              color: #333333;
            }
            h1 {
              margin: 0;
              writing-mode: vertical-rl;
              font-size: 36px;
              color: #333333;
              font-weight: bold;
              text-align: center;
            }
          }
          .btn-left {
            width: 220px;
            height: 60px;
            text-align: center;
            margin: 0 auto;
            line-height: 60px;
            background-color: #333333;
            color: #ffd02c;
            font-size: 30px;
            border-radius: 6px;
            margin-top: 70px;
            cursor: pointer;
          }
        }
        .right {
          width: 60%;
          height: 100%;
          position: relative;
          background-image: url("../assets/img/one.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          .white-block {
            position: absolute;
            width: 100px;
            height: 70px;
            background-color: #ffd02c;
            top: 0;
            left: 0;
          }
          .number {
            position: absolute;
            top: 130px;
            left: 30px;
            font-size: 48px;
            color: #333333;
            font-weight: bold;
          }
          .bottom {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            padding-right: 90px;
            .btn {
              display: flex;
              justify-content: flex-end;
              .btn-right {
                width: 46px;
                height: 46px;
                border-radius: 50%;
                background-color: #fff;
                font-size: 24px;
                font-weight: bold;
                text-align: center;
                line-height: 46px;
                margin-left: 14px;
              }
              .btn-left {
                width: 46px;
                height: 46px;
                border-radius: 50%;
                background-color: #fff;
                font-size: 24px;
                font-weight: bold;
                text-align: center;
                line-height: 46px;
              }
            }
            .text-p {
              font-size: 20px;
              color: #ffd02c;
              padding-bottom: 20px;
              padding-left: 10px;
            }
          }
        }
      }
      .center2 {
        .left {
          background-color: #fff;
          .text-p {
            color: #ffd02c;
          }
          .btn-left {
            background-color: #ffd02c;
            color: #333333;
          }
        }
        .right {
          background-image: url("../assets/img/two.png");
          .white-block {
            background-color: #fff;
          }
          .bottom {
            .text-p {
              color: #fff;
            }
          }
        }
      }
    }
  }
  .small-content {
    width: 100%;
    height: 100%;
    display: none;
    padding: 36px;
    padding-right: 0;

    .carousel-3d-slide {
      background-color: #fff;
      border: 0;
      border-radius: 20px;
      box-shadow: 0px 38px 46px 0px rgba(246, 202, 46, 0.26);

      .center {
        width: 100%;
        height: 100%;
        .bg {
          width: 100%;
          height: 68%;
          background-image: url("../assets/img/small-two.jpg");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          position: relative;
          .logo {
            padding: 50px 0 0 50px;
            font-size: 16px;
            color: #333333;
            .logo-pic {
              width: auto;
              vertical-align: middle;
              margin-right: 6px;
            }
          }
          .pages{
            width: 50px;
            height: 30px;
            position: absolute;
            bottom:0;
            left:0;
            right:0;
            margin: auto;
            display: flex;
            justify-content: space-around;
            .page{
              width: 14px;
              height: 14px;
              border-radius: 50%;
              background-color: #f0f0f0;
              display: flex;
              justify-content: center;
              align-items: center;
              .box{
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #CCCCCC;
              }
            }
            .page-color{
              background-color: #fff1bf;
              .box{
                background-color: #FFD02C;
              }
            }
          }
        }
        .text {
          width: 100%;
          height: 32%;
          padding: 40px;
          h1 {
            font-size: 26px;
            color: #333333;
            margin-bottom: 10px;
            font-weight: bold;
          }
          p {
            font-size: 14px;
            color: #333333;
            line-height: 1.5em;
            margin-bottom: 20px;
          }
          .btn {
            width: 200px;
            height: 50px;
            background-color: #ffd02c;
            line-height: 50px;
            font-size: 24px;
            border-radius: 30px;
            font-weight: bold;
            color: #333333;
            text-align: center;
            margin: 0 auto;
            cursor: pointer;
          }
        }
      }
      .one {
        .bg {
          background-image: url("../assets/img/small-one.png");
          background-position: -62px -36px;
          background-size: 120% 120%;
        }
        .text {
          background-color: #ffd02c;
          .btn {
            background-color: #333;
            color: #ffd02c;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 992px) and (max-width: 1200px) {
  .Inlet {
    .content {
      .carousel-3d-slide {
        .center {
          .left {
            .logo {
              padding: 25px 0 0 25px;
            }
            .ornament1 {
              top: 80px;
              left: 160px;
            }
            .text {
              margin-top: 80px;
              .introduce {
                font-size: 14px;
              }
              h1 {
                font-size: 22px;
              }
            }
            .btn-left {
              width: 180px;
              height: 40px;
              font-size: 22px;
              line-height: 40px;
              margin-top: 20px;
            }
            .text-p {
              font-size: 16px;
              padding-bottom: 10px;
            }
          }
          .right {
            .white-block {
              width: 80px;
              height: 60px;
            }
            .number {
              font-size: 30px;
              top: 100px;
            }
            .bottom {
              .text-p {
                font-size: 16px;
                padding-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 992px) {
  .Inlet {
    .content {
      display: none;
    }
    .small-content {
      display: block;
    }
  }
}

@media screen and (max-width: 768px) {
  .Inlet {
    .content {
      display: none;
    }
    .small-content {
      display: block;
      width: 90%;
      margin: 0 auto;
      padding: 0;
      padding-top: 60px;
      .carousel-3d-container{
        .center {
          .bg {
            .logo {
              padding: 20px 0 0 20px;
              font-size: 12px;
              .logo-pic {
                width: 26px;
                height: 26px;
                margin-right: 2px;
              }
            }
            .pages{
              width: 40px;
              height: 20px;
              .page{
                width: 12px;
                height: 12px;
                .box{
                  width: 8px;
                  height: 8px;
                }
              }
              .page-color{
                background-color: #fff1bf;
                .box{
                  background-color: #FFD02C;
                }
              }
            }
          }
          .text {
            padding-top: 15px;
            padding-left: 20px;
            h1 {
              font-size: 18px;
              margin-bottom: 10px;
            }
            p {
              font-size: 14px;
              color: #333333;
              line-height: 1.3em;
              margin-bottom: 10px;
            }
            .btn {
              width: 130px;
              height: 30px;
              line-height: 30px;
              font-size: 14px;
            }
          }
        }
        .one {
          .bg {
            background-image: url("../assets/img/small-one.png");
            background-position: -34px 0px;
            background-size: 120% 110%;
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
@media screen and (max-width: 768px) {
  .Inlet {
    background-color: #fff !important;
    .content {
      display: none;
    }
    .small-content {
      display: block;
      width: 90%;
      margin: 0 auto;
      padding: 0;
      .carousel-3d-container {
        width: 338px !important;
        box-shadow:0px 22px 46px 0px rgba(246,202,46,0.26);
        height: 500px !important;
        .carousel-3d-slider {
          width: 100% !important; 
          height: 500px !important;
          .carousel-3d-slide {
            width: 100% !important; 
            height: 500px !important;
          }
        }
      }
    }
  }
}
</style>