<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-05-21 09:59:05
 * @LastEditors: cy
 * @LastEditTime: 2021-05-21 10:19:13
-->
<template>
    <div>
        父组件的row值：{{row}}
        <button @click="onClick">传递</button>
        <child :row="row"></child>
    </div>
</template>

<script>
    import Child from "./Child.vue";
    export default {
        components: {
            Child,
        },
        data() {
            return {
                list: [
                    { name: '王丽', study: 'Java' },
                    { name: '李克', study: 'Python' }
                ],
                row: 1
            }
        },
        methods: {
            onClick($e) {
                this.row = 12;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>