<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-05-21 09:59:12
 * @LastEditors: cy
 * @LastEditTime: 2021-05-21 10:22:19
-->
<template>
    <div>
        Child: {{row}}
        <Grand v-bind="$attrs"></Grand>
    </div>
</template>

<script>
    import Grand from "./Grand.vue";
    export default {
        inheritAttrs: false,
        components: {
            Grand,
        },
    }
</script>

<style lang="scss" scoped>

</style>
