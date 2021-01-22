<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-01-14 16:15:48
 * @LastEditors: cy
 * @LastEditTime: 2021-01-22 16:37:00
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-view></router-view> -->
    <anchored-head></anchored-head>
    <transition></transition>
    <style-bind></style-bind>
    <comp-transition></comp-transition>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AnchoredHead from './components/jsx/AnchoredHead'
import Transition from './components/transition';
import StyleBind from './components/transition/StyleBind';
import CompTransition from './components/transition/CompTransition'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AnchoredHead,
    Transition,
    StyleBind,
    CompTransition,
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
