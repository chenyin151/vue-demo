<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-04 11:01:40
 * @LastEditors: cy
 * @LastEditTime: 2021-02-04 11:07:33
-->
<template>
    <div>
        <navigation-link url="/profile">
            Logged in as {{ url }}
        </navigation-link>
    </div>
</template>

<script>
    import NavigationLink from './NavigationLink.vue';
    export default {
        data() {
            return {
                user: { name: 'chenyin' }
            }
        },
        components: {
            NavigationLink
        },
    }
</script>

<style lang="less" scoped>

</style>