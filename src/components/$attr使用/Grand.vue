<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-05-21 09:59:16
 * @LastEditors: cy
 * @LastEditTime: 2021-08-12 16:29:13
-->
<template>
    <div @click="onClick">
        孙子组件接收到参数: {{col}} xxx {{row}}
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        // props: {
        //     list: {
        //         type: Array,
        //         default: () => []
        //     },
        //     row
        // },
        props: ['col', 'row'],
        mounted () {
            
        },
        methods: {
            onClick() {
                this.$emit('update');
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
