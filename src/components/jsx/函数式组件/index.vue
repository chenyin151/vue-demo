<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-05 10:54:27
 * @LastEditors: cy
 * @LastEditTime: 2021-02-05 11:32:16
-->
<script>
    import './funcComp'
    export default {
        render(h) {
            return h('smart-list', {
                props: {
                    items: [{name: '1'}]
                }
            }, 'ss')
        }
    }
</script>

<style lang="less" scoped>

</style>