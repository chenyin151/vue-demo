<!--
 * @Author: your name
 * @Date: 2021-08-12 00:27:03
 * @LastEditTime: 2021-08-12 15:06:29
 * @LastEditors: cy
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\components\provider\inject\parent.vue
 * https://www.jianshu.com/p/02b59dfe2a81
-->
<template>
    <div>
        {{name}}
        <child-one v-bind:type="'button'"></child-one>
    </div>
</template>

<script>
    import ChildOne from "./child-one.vue";
    export default {
        name: 'Parent',
        provide() {
            return {
                message: { 
                    text: this.name
                }
            }
        },
        data() {
            return {
                name: 1
            }
        },
        mounted () {
            setInterval(() => {
                this.name = '3'
                console.log('timer', this._provided);
            }, 1000);
        },
        components: {
            ChildOne
        },
    }
</script>

<style lang="scss" scoped>

</style>