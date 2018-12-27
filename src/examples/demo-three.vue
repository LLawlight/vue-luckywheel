<template>
  <div class="demo-3">
    <h2>自定义奖项数量</h2>
    <vue-luckywheel
      class="demo"
      ref="vueLuckywheel"
      :prize-index="prizeIndex"
      @get-prize="getPrize"
      @game-over="gameOver">
      <vue-luckywheel-item v-for="(prize, index) in prizeList" :key="index">
        <div :class="['name', {'thank-you': prize.level < 0}]">{{prize.name}}</div>
        <div class="level" v-if="prize.level > 0">{{formatLevel(prize.level)}}等奖</div>
      </vue-luckywheel-item>
    </vue-luckywheel>

    <div v-if="records.length">
      <h3>中奖记录</h3>
      <ol>
        <li v-for="(record, index) in records" :key="index">
          抽中<span v-if="record.level > 0">{{formatLevel(record.level)}}等奖</span>{{record.name}}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prizeIndex: 0,
      prizeList: [
        {
          level: 1,
          name: '888元',
        },
        {
          level: 2,
          name: '777元',
        },
        {
          level: 3,
          name: '666元',
        },
        {
          level: 4,
          name: '555元',
        },
        {
          level: 5,
          name: '444元',
        }
      ],
      records: []
    }
  },

  created() {
    this.prizeList.push({
      level: '-1',
      name: '谢谢参与',
    });
  },

  methods: {
    formatLevel(level) {
      switch (level) {
        case 1:
        return '一';
        case 2:
        return '二';
        case 3:
        return '三';
        case 4:
        return '四';
        case 5:
        return '五';
        default:
        return '';
      }
    },

    getPrize() {
      setTimeout(() => {
        this.prizeIndex = Math.floor(Math.random() * this.prizeList.length);
        this.$nextTick(this.$refs.vueLuckywheel.draw);
      }, 300);
    },

    gameOver() {
      this.records.push(this.prizeList[this.prizeIndex])
    }
  }
}
</script>

<style lang="scss">
.demo-3 {
  .demo {
    .vue-lucky-wheel-item-content {
      font-size: 12px;

      .name, .level {
        position: absolute;
        left: 0;
        width: 100%;
      }

      .name {
        top: 30px;

        &.thank-you {
          white-space: pre-line;
        }
      }

      .level {
        bottom: 60px;
      }
    }
  }
}
</style>
