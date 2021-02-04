/*
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-01 15:15:41
 * @LastEditors: cy
 * @LastEditTime: 2021-02-03 13:28:50
 */
import './AnchoredHead';
import Vue from 'vue';
Vue.component('AnchoredHeading', {
    name: 'AnchoredHeading',
    render($h) {
        return $h('div', [
            $h('div', 'Hello World'),
            $h('anchored-head', {
                // 这个domProps.innerHTML会覆盖所有内容
                // domProps: { innerHTML: 'sss1' },
                props: { myProps: '输入属性1' },
                scopedSlots: { 
                    default: function(props) {
                        return createElement('span', props.text)
                    }
                }
            })
        ])
    }
})