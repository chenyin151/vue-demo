<!--
 * @Author: your name
 * @Date: 2021-08-12 00:27:11
 * @LastEditTime: 2021-08-12 15:07:33
 * @LastEditors: cy
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\components\provider\inject\child-one.vue
-->
<template>
    <!-- <div>
        {{demo}}
        <input />
        <child-two></child-two>
    </div> -->
    <input />
</template>

<script>
    import ChildTwo from './child-two.vue'
    export default {
        inheritAttrs: false,
        name: 'childOne',
        inject: ['message'],
        props: {
            // value: {
            //     type: String,
            //     default: ''
            // },
        },
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
