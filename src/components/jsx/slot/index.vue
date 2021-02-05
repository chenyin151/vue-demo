<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-03 15:34:28
 * @LastEditors: cy
 * @LastEditTime: 2021-02-05 09:46:11
-->
<script>
import SlotT from './Slot.vue'
    export default {
        render: function(createElement) {
            return createElement('div', [
                'Hello World',
                createElement('SlotT', {
                    scopedSlots: {
                        default: function(props) {
                            return createElement('span', ['我是插槽内容1', `从组件中传入的参数：${props.text}`])
                        },
                        name1: function(props) {
                            return createElement('div', ['我是插槽name2',`${props.text}`])
                        }
                    }
                })
            ])
        },
        components: {
            SlotT
        }
    }
</script>

<style lang="less" scoped>

</style>