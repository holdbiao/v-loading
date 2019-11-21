<template>
  <transition name="fade">
    <div class="biu-loading-cont" v-show="visible">
      <div class="biu-loading-main">
        <i class="biu-loading-icon"></i>
        <p class="biu-text" v-show="text">{{text}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      text: ''
    }
  },
  methods: {
    close () {
      this.visible = false
      setTimeout(_ => {
        this.$destroy(true)
        this.$el && this.$el.parentNode.removeChild(this.$el)
      }, 500)
    }
  }
}
</script>
<style lang="scss">
.biu-loading-cont {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .2);
  opacity: 1;
  .biu-loading-main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    // width: 100px;
    // height: 100px;
    min-width: 120px;
    max-width: 200px;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 25px 20px;
    text-align: center;
    background-color: #fff;
    .biu-loading-icon {
      display: inline-block;
      width: 50px;
      height: 50px;
      border: 4px solid #eee;
      border-top-color: rgb(155, 155, 155);
      border-radius: 50%;
      box-sizing: border-box;
      animation: circle .3s infinite ease-in-out;
    }
    @keyframes circle {
      0% {
        transform: rotate(0deg);
        border-top-color: rgb(199, 199, 199);
      }
      50% {
        transform: rotate(180deg);
        border-top-color: #333;
      }
      100% {
        transform: rotate(360deg);
        border-top-color: rgb(199, 199, 199);
      }
    }
    .biu-text {
      color: #333;
      margin: 0;
      padding: 0;
      padding-top: 10px;
      font-size: 14px;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
