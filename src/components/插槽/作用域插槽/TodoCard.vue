<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-06-01 10:33:56
 * @LastEditors: cy
 * @LastEditTime: 2021-06-01 10:42:54
-->
<template>
    <div @click="$emit('click')">
        TodoCard: {{item}}
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                default: () => {}
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>
