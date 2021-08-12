<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-05-21 09:59:05
 * @LastEditors: cy
 * @LastEditTime: 2021-08-12 16:27:46
-->
<template>
    <div>
        父组件的row值：{{row}}
        <button @click="onClick">传递</button>
        <child :row="row" :col="col" @update="onUpd" @childUpd="childUpd"></child>
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
                row: 2, 
                col: 2
            }
        },
        methods: {
            childUpd() {
                console.log('----------------index.childUpd------------------------')
            },
            onUpd() {
                console.log('onUpd');
            },
            onClick($e) {
                this.row = 12;
                this.col = 11;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>