<!--
 * @Author: your name
 * @Date: 2021-08-12 00:27:11
 * @LastEditTime: 2021-08-12 00:32:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\components\provider\inject\child-one.vue
-->
<template>
    <div>
        {{demo}}
        <child-two></child-two>
    </div>
</template>

<script>
    import ChildTwo from './child-two.vue'
    export default {
        name: 'childOne',
        inject: ['message'],
        data() {
            return {
                demo: this.message
            }
        },
        components: {
            ChildTwo
        },
    }
</script>

<style lang="scss" scoped>

</style>
