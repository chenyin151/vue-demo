<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-04 14:05:43
 * @LastEditors: cy
 * @LastEditTime: 2021-02-04 14:45:38
-->
<template>
    <div>
        <todo-list :list="items">
            <template slot-scope:todo="{ item }">
                <span v-if="item.saled">卖出去的价格：{{item.cost}}</span>
            </template>
        </todo-list>
    </div>
</template>

<script>
    import TodoList from "./TodoList.vue"
    export default {
        data() {
            return {
                items: [{ id: 1, name: '火龙果', cost: 10, saled: true }, { id: 2, name: '车厘子', cost: 10, sale: false }]
            }
        },
        components: {
            TodoList,
        },
    }
</script>

<style lang="less" scoped>

</style>
