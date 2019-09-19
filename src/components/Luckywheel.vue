<template>
  <div class="vue-lucky-wheel" :style="style">
    <div
      class="vue-lucky-wheel-main"
      :style="mainStyle">
      <slot/>
    </div>
    <div class="vue-lucky-wheel-button" @click="getPrize">
      <slot name="button">
        <img 
          :src="defaultButton"
          :width="300 / size * 85"
          :height="300 / size * 85">
      </slot>
    </div>
  </div>
</template>

<script>
import defaultButton from '@/assets/default_button.png'

export default {
  name: 'vue-luckywheel',

  props: {
    defaultBackground: {
      type: Boolean,
      default: true
    },

    size: {
      type: Number,
      default: 300
    },

    rotateTime: {
      type: Number,
      default: 6
    },

    prizeIndex: {
      type: Number
    }
  },

  data() {
    return {
      itemNumber: 0,
      rotateAngle: 0,
      startAngle: 0,
      isDrawing: false,
      defaultButton
    }
  },

  computed: {
    style() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
      }
    },

    mainStyle() {
      return {
        ...this.style,
        transform: `rotate(${this.rotateAngle}deg)`,
        transition: `transform ${this.rotateTime}s ease-in-out`,
      }
    },

    prizeAngleList() {
      let itemNumber = this.itemNumber
      const onePrizeAngle = 360 / itemNumber / 2
      const prizeAngleList = []

      while (itemNumber > 0) {
        prizeAngleList.push(onePrizeAngle + --itemNumber * onePrizeAngle * 2)
      }

      return prizeAngleList
    }   
  },

  mounted() {
    this.itemNumber = this.$children.length
  },

  methods: {
    getPrize() {
      if (this.isDrawing) { return; }

      this.isDrawing = true
      this.$emit('get-prize')
    },

    draw() {
      this.rotateAngle = this.startAngle + 6 * 360 + this.prizeAngleList[this.prizeIndex] - this.startAngle % 360
      this.startAngle = this.rotateAngle
      setTimeout(() => {
        this.isDrawing = false
        this.$emit('game-over')
      }, this.rotateTime * 1000)
    }
  }
}
</script>

<style lang="scss">
.vue-lucky-wheel {
  position: relative;
  border-radius: 100%;
  overflow: hidden;
  // 必须改变父元素的维度才能包住子元素
  transform: translate3d(0,0,0);
  margin: 0 auto;

  .vue-lucky-wheel-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

