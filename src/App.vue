<template>
  <div id="app">
    <h1>Светофор</h1>
    <TrafficControl/>
  </div>
</template>

<script>

import TrafficControl from '@/components/trafficControl.vue';

export default {
  components: {
    TrafficControl
  }
}
</script>

<style lang="scss">
  * {
    background-color: #546E7A;
  }
  #app {
    font-family: sans-serif;
    color: #E7EBEC;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
