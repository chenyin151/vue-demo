/*
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-05 09:57:25
 * @LastEditors: cy
 * @LastEditTime: 2021-02-05 11:46:28
 */
import Vue from 'vue';
var EmptyList = (function() { return 'div'})()
// var TableList = {}
var OrderedList = {}
var UnorderedList = {}
var TableList = 'table-list'
Vue.component('table-list', {
    functional: true,
    props: { name: '111'},
    render: function(h, context) {
        debugger
        return h('div', context)
    }
})

Vue.component('smart-list', {
    functional: true,
    props: { 
        items: {
            type: Array,
            required: true
        },
        isOrdered: Boolean
    },
    render: function(createElement, context) {
        debugger
        function appropriateComponent() {
            var items = context.props.items;
            if (items.length === 0) return EmptyList;
            if (typeof items[0] === 'object') return TableList;
            if (context.props.isOrdered) return OrderedList;
            return UnorderedList;
        }
        return createElement(
            appropriateComponent(),
            context.data,
            context.children
        )
    }
})