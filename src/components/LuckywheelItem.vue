<template>
  <div :class="['vue-lucky-wheel-item', {'default-background': defaultBackground}]" :style="style">
    <div class="vue-lucky-wheel-item-background" :style="styleBackground"></div>
    <div class="vue-lucky-wheel-item-content" :style="styleContent">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-luckywheel-item',

  data() {
    return {
      itemNumber: 0,
      defaultBackground: this.$parent.defaultBackground,
      size: this.$parent.size
    }
  },

  computed: {
    index() {
      let index = 0
      this.$parent.$children.some((children, i) => {
        if (children === this) {
          index = i
          return true
        } else {
          return false
        }
      })
      return index
    },

    centerAngle() {
      return 360 / this.itemNumber;
    },

    style() {
      return {
        transform: `rotate(${this.centerAngle * this.index}deg)`,
        width: `${this.size / 2}px`,
        height: `${this.size / 2}px`,
      }
    },

    styleBackground() {
      return {
        transform: `skewY(-${90 - this.centerAngle}deg)`,
        width: `${this.size / 2}px`,
        height: `${this.size / 2}px`,
      }
    },

    styleContent() {
      return {
        transform: `translateX(-50%) rotate(${this.centerAngle / 2}deg)`,
        width: `${2 * (this.size / 2) * Math.sin(this.centerAngle / 2 * (Math.PI / 180))}px`,
        height: `${this.size / 2}px`,
      }
    }
  },

   mounted() {
    this.itemNumber = this.$parent.$children.length;
  }
}
</script>

<style lang="scss">
.vue-lucky-wheel-item {
  position: absolute;
  top: 0;
  left: 50%;
  transform-origin: 0 100%;

  &.default-background:nth-child(odd) {
    .vue-lucky-wheel-item-background {
      background-color: #FF925D;
    }
  }

  &.default-background:nth-child(even) {
    .vue-lucky-wheel-item-background {
      background-color: #FFCC72;
    }
  }

  .vue-lucky-wheel-item-background {
    transform-origin: 0 100%;
  }

  .vue-lucky-wheel-item-content {
    position: absolute;
    left: 0;
    bottom: 0;
    transform-origin: 50% 100%;
  }
}
</style>