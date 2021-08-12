<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-04 14:05:43
 * @LastEditors: cy
 * @LastEditTime: 2021-06-01 10:44:00
-->
<template>
    <div>
        <todo-list :list="items">
            <template v-slot:todo="{ item }">
                <span v-if="item.saled">卖出去的价格：{{item.cost}}</span>
                <todo-card @click="onClick(item)"></todo-card>
            </template>
        </todo-list>
    </div>
</template>

<script>
    import TodoList from "./TodoList.vue"
    import TodoCard from './TodoCard.vue'
    export default {
        data() {
            return {
                items: [{ id: 1, name: '火龙果', cost: 10, saled: true }, { id: 2, name: '车厘子', cost: 10, sale: false }]
            }
        },
        methods: {
            onClick(e) {
                console.log('click', e)
            }
        },
        components: {
            TodoList,
            TodoCard
        },
    }
</script>

<style lang="less" scoped>

</style>
