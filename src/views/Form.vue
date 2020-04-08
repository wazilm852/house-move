<template>
  <div class="form">
    <div class="content">
      <div class="logo">
        <img src="../assets/img/logo.png" alt class="logo-pic" />
        标准搬家
      </div>
      <h1>{{title}}</h1>
      
      <div class="input-box">
        <!-- 城市选择器 -->
        <div class="city-label">选择城市</div>
        <Select class="city" v-model="modelCity">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <!-- input -->
        <span class="input input--hoshi">
          <input v-model="model.name" class="input__field input__field--hoshi" type="text" id="input-4" />
          <label class="input__label input__label--hoshi input__label--hoshi-color-1" for="input-4">
            <span class="input__label-content input__label-content--hoshi">联系人</span>
          </label>
        </span>
        <span class="input input--hoshi">
          <input v-model="model.phone" maxlength="11" class="input__field input__field--hoshi" type="text" id="input-5" />
          <label class="input__label input__label--hoshi input__label--hoshi-color-2" for="input-5">
            <span class="input__label-content input__label-content--hoshi">联系电话</span>
          </label>
        </span>
        <span class="input input--hoshi">
          <input v-model="model.beginRegion" class="input__field input__field--hoshi" type="text" id="input-6" />
          <label class="input__label input__label--hoshi input__label--hoshi-color-3" for="input-6">
            <span class="input__label-content input__label-content--hoshi">出发地</span>
          </label>
        </span>
        <span class="input input--hoshi">
          <input v-model="model.endRegion" class="input__field input__field--hoshi" type="text" id="input-6" />
          <label class="input__label input__label--hoshi input__label--hoshi-color-3" for="input-6">
            <span class="input__label-content input__label-content--hoshi">目的地</span>
          </label>
        </span>
        <div class="btn">
          <vbutton :model='model'></vbutton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vbutton from "../components/button.vue";
import classie from "desandro-classie";
export default {
  components: {
    vbutton
  },
  data() {
    return {
      title: this.$route.query.number ? '快捷式搬家' : '一站式搬家',
      modelCity: '杭州',
      cityList: [
        {
          value: "杭州",
          label: "杭州"
        },
        {
          value: "北京",
          label: "北京"
        },
        {
          value: "上海",
          label: "上海"
        },
        {
          value: "广东",
          label: "广东"
        }, 
        {
          value: "深圳",
          label: "深圳"
        }
      ],
      model: {
        name: '',
        phone: '',
        beginRegion: '',
        endRegion: ''
      }
    };
  },
  created() {
    console.log(this.$route.query.number)
  },
  mounted() {
    this.show();
  },
  methods: {
    show() {
      [].slice
        .call(document.querySelectorAll("input.input__field"))
        .forEach(function(inputEl) {
          // in case the input is already filled..
          if (inputEl.value.trim() !== "") {
            classie.add(inputEl.parentNode, "input--filled");
          }

          // events:
          inputEl.addEventListener("focus", onInputFocus);
          inputEl.addEventListener("blur", onInputBlur);
        });

      function onInputFocus(ev) {
        classie.add(ev.target.parentNode, "input--filled");
      }

      function onInputBlur(ev) {
        if (ev.target.value.trim() === "") {
          classie.remove(ev.target.parentNode, "input--filled");
        }
      }
    }
  }
};
</script>

<style scoped lang="less">
@import "../assets/style/input/component.css";
@import "../assets/style/input/demo.css";
@import "../assets/style/input/normalize.css";
.form {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("../assets/img/form-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 600px;
    height: 680px;
    background-color: #fff;
    padding: 40px;
    .logo {
      font-size: 16px;
      color: #000000;
      font-weight: bold;
      .logo-pic {
        vertical-align: middle;
        margin-right: 4px;
      }
    }
    h1 {
      font-size: 30px;
      color: #333333;
      text-align: center;
      font-weight: bold;
      margin: 0;
      margin-bottom: 20px;
    }
    .input-box {
      width: 350px;
      margin: 0 auto;
      .city-label{
        font-size: 15px;
        color:#333333;
        margin-bottom: 10px;
        padding-left: 5px;
      }
    }
    .btn{
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }
  }
}
</style>