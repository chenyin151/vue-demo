<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-04 11:17:40
 * @LastEditors: cy
 * @LastEditTime: 2021-02-04 11:25:30
-->
<template>
    <div>
        <base-layout>
            <template v-slot:header>
                <h1>Here might be a page title</h1>
            </template>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
            <template v-slot:footer>
                <p>Here's some contact info.</p>
            </template>
        </base-layout>
    </div>
</template>

<script>
    import BaseLayout from './BaseLayout.vue';
    export default {
        components: {
            BaseLayout,
        },
    }
</script>

<style lang="less" scoped>

</style>
