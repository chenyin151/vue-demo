<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-01-22 14:11:49
 * @LastEditors: cy
 * @LastEditTime: 2021-01-22 15:37:44
-->
<template>
    <div id="demo">
        Push this button to do something you shouldn't be doing:<br />
        <div :class="{shake: noActivated}">
            <button @click="noActivated = true">Click me</button>
            <span v-if="noActivated">Oh no!</span>
        </div>
        <button class="button">Animation</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                noActivated: false
            }
        },
    }
</script>

<style lang="less" scoped>
    .shake { 
        animation: shake .82s cubic-bezier(.36, .07, .19, .97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }
    @keyframes shake {
        10%,
        90% {
            transform: translate3d(-1px, 0, 0);
        }
        20%,
        80% {
            transform: translate3d(2px, 0, 0);
        }
        30%,
        50%,
        70% {
            transform: translate3d(-4px, 0, 0);
        }
        40%,
        60% {
            transform: translate3d(4px, 0, 0);
        }
    }
    .button {
        background: #1b8f5a;
        transition: background .25s ease-in;
        &:hover {
            background: #3eaf7c;
            transition: background .35 s ease-out;
        }
    }
</style>
