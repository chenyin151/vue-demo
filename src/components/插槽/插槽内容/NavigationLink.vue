<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-04 10:59:41
 * @LastEditors: cy
 * @LastEditTime: 2021-02-04 11:05:03
-->
<template>
    <div>
        <a v-bind:href="url">
            <slot></slot>
        </a>
    </div>
</template>

<script>
    export default {
        props: {
            url: {
                type: String,
                default: ''
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>
