<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-05-21 09:59:12
 * @LastEditors: cy
 * @LastEditTime: 2021-08-12 16:28:20
-->
<template>
    <div>
        Child: {{row}}
        <Grand v-bind="$attrs" @update="onGrandUpd" v-on="$listeners"></Grand>
    </div>
</template>

<script>
    import Grand from "./Grand.vue";
    export default {
        // 在此组件没有专门的props接收时，他会作为HTML的一个属性存在
        inheritAttrs: false,
        // 这里接收了row,那么它会从$attrs中移除
        props: ['row'],
        components: {
            Grand,
        },
        methods: {
            onGrandUpd() {
                console.log("onGrandUpd")
            }
        },
        mounted () {
            console.log("mounted", Object.keys(this.$attrs).length);
            this.$emit('childUpd')
        },
    }
</script>

<style lang="scss" scoped>

</style>
