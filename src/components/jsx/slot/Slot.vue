<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-03 15:34:43
 * @LastEditors: cy
 * @LastEditTime: 2021-02-04 10:29:32
-->
<script>
    export default {
       props: ['message'],
       render: function(createElement) {
           console.log('slot.render')
           return createElement('div', [this.$scopedSlots.default({
            //    text: this.message
           })])
       }
    }
</script>

<style lang="less" scoped>

</style>