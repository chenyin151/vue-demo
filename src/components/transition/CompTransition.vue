<!--
 * @Description: 单元素/组件的过渡
 * @version: 
 * @Author: cy
 * @Date: 2021-01-22 16:00:26
 * @LastEditors: cy
 * @LastEditTime: 2021-01-22 17:40:09
-->
<template>
    <div id="demo">
        <button @click="show = !show">
            Toggle
        </button>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true
            }
        },
    }
</script>

<style lang="less">
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }
    .fade-enter-from {
        opacity: 0;
    }
    .fade-leave-to {
        opacity: 0;
    }
</style>