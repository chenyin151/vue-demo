<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-01-14 16:15:48
 * @LastEditors: cy
 * @LastEditTime: 2021-08-12 15:35:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-02 22:47:56
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-view></router-view> -->
    <!-- <anchored-heading></anchored-heading> -->
    <!-- <transition></transition> -->
    <!-- <style-bind></style-bind> -->
    <!-- <comp-transition></comp-transition> -->
    <!-- <slot-test></slot-test> -->
    <!-- <slot-test></slot-test> -->
    <!-- <base-layout></base-layout> -->
    <!-- <scoped-slot></scoped-slot> -->
    <!-- <jsx-slot-test></jsx-slot-test> -->
    <!-- <func-comp></func-comp> -->
    <!-- <todo-test></todo-test> -->
    <!-- <echart-flex></echart-flex> -->
    <attrs></attrs>
    <!-- <svg-demo></svg-demo> -->
    <!-- <todo-test></todo-test> -->
    <provide-inject></provide-inject>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import './components/jsx'
import Transition from './components/transition';
import StyleBind from './components/transition/StyleBind';
import CompTransition from './components/transition/CompTransition'
import JsxSlotTest from './components/jsx/slot/index.vue';
import SlotTest from './components/插槽/插槽内容/index.vue'
import BaseLayout from './components/插槽/插槽内容/BaseLayoutTest.vue';
import ScopedSlot from './components/插槽/作用域插槽/index.vue';
import TodoTest from './components/插槽/作用域插槽/TodoTest.vue'
import FuncComp from './components/jsx/函数式组件/index.vue';
import EchartFlex from './components/Echart在flex下的测试/index.vue';
import Attrs from './components/$attr使用/index.vue';
import SvgDemo from './components/svg/index.vue'
import FuncComp1 from './components/jsx/函数式组件/funcComp1';
import ProvideInject from './components/provider_inject/parent.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Transition,
    StyleBind,
    CompTransition,
    SlotTest,
    BaseLayout,
    ScopedSlot,
    TodoTest,
    JsxSlotTest,
    FuncComp,
    EchartFlex,
    Attrs,
    SvgDemo,
    ProvideInject
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
