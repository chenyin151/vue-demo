<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-01-14 16:15:48
 * @LastEditors: cy
 * @LastEditTime: 2021-01-22 15:31:23
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-view></router-view> -->
    <anchored-head></anchored-head>
    <transition></transition>
    <style-bind></style-bind>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AnchoredHead from './components/jsx/AnchoredHead'
import Transition from './components/transition';
import StyleBind from './components/transition/StyleBind';

export default {
  name: 'App',
  components: {
    HelloWorld,
    AnchoredHead,
    Transition,
    StyleBind
  },
  methods: {
    reload() {
      console.log('reload');
    }
  },
  // provide() {
  //   return {
  //     reload: this.reload
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
