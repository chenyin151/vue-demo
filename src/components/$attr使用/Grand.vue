<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-05-21 09:59:16
 * @LastEditors: cy
 * @LastEditTime: 2021-05-21 10:20:54
-->
<template>
    <div>
        孙子组件接收到参数: {{row}}
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        props: {
            list: {
                type: Array,
                default: () => []
            },
            row: {
                type: Number,
                default: 0
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
