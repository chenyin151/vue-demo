/*
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-01-22 16:06:41
 * @LastEditors: cy
 * @LastEditTime: 2021-02-03 15:29:08
 */
import Vue from 'vue'
Vue.component('AnchoredHead', {
    data() {
        return {
            blogTitle: 'chenyin'
        }
    },
    props: {
        myProps: '',
    },
    methods: {
        clickHandler($event) {
            console.log('clickHandler')
        }
    },
    render: function(createElement) {
        let _this = this;
        console.log('render', this.$scopedSlots.default)
        return createElement('h1', {
            attrs: { id: 'foo' },
            on: { 
                click: this.clickHandler
            },
        })
    }
})