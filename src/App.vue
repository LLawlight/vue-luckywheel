<template>
  <div id="app">
    <h1>vue-luckywheel</h1>
    <div class="demo-container">
      <DemoOne></DemoOne>
      <DemoTwo></DemoTwo>
      <DemoThree></DemoThree>
    </div>
  </div>
</template>

<script>
import DemoOne from './examples/demo-one.vue';
import DemoTwo from './examples/demo-two.vue';
import DemoThree from './examples/demo-three.vue';

export default {
  components: {
    DemoOne,
    DemoTwo,
    DemoThree,
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .demo-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  li {
    text-align: left;
  }
}
</style>
