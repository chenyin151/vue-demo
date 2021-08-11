<!--
 * @Author: your name
 * @Date: 2021-08-12 00:27:03
 * @LastEditTime: 2021-08-12 00:30:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\components\provider\inject\parent.vue
 * https://www.jianshu.com/p/02b59dfe2a81
-->
<template>
    <div>
        <child-one></child-one>
    </div>
</template>

<script>
    import ChildOne from "./child-one.vue";
    export default {
        name: 'Parent',
        provide: {
            message: 'demo'
        },
        components: {
            ChildOne
        },
    }
</script>

<style lang="scss" scoped>

</style>