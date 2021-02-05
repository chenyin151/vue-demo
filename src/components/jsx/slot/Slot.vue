<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-03 15:34:43
 * @LastEditors: cy
 * @LastEditTime: 2021-02-05 09:35:23
-->
<script>
    export default {
       props: ['message'],
       render: function(createElement) {
           console.log('slot.render')
           return createElement('div', [this.$scopedSlots.default({
               text: 'ddd'
           }), this.$scopedSlots.name1({
               text: '111'
           })])
       }
    }
</script>

<style lang="less" scoped>

</style>