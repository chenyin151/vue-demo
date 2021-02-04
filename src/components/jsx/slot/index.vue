<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-03 15:34:28
 * @LastEditors: cy
 * @LastEditTime: 2021-02-04 10:29:20
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
                            debugger
                            return createElement('span', 'ss')
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