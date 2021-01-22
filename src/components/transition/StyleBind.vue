<!--
 * @Description: 
 * @version: 过渡与Style绑定
 * @Author: cy
 * @Date: 2021-01-22 15:18:36
 * @LastEditors: cy
 * @LastEditTime: 2021-01-22 15:26:32
-->
<template>
    <div id="demo">
        <div @mousemove="xCoordinate" :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }" class="movearea">
            <h3>Move your mouse across the screen...</h3>
            <p>x: {{x}}</p>
        </div>
    </div>
</template>

<script>
    export default {
       data() {
           return {
               x: 0
           }
       }, 
       methods: {
           xCoordinate(e) {
               this.x = e.clientX
           }
       }
    }
</script>

<style lang="less" scoped>
    .movearea { transition: .2s background-color ease; }
</style>
