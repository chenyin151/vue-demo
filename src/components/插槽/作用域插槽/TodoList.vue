<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-04 14:05:26
 * @LastEditors: cy
 * @LastEditTime: 2021-02-04 14:14:30
-->
<template>
    <div>
        <li v-for="item in list" :key="item.id">
            <slot name="todo" :item="item">
                {{item.name}}
            </slot>
        </li>
    </div>
</template>

<script>
    export default {
        props: {
            list: {
                type: Array,
                default: () => []
            },
        },
    }
</script>

<style lang="less" scoped>

</style>