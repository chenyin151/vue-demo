<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-04 11:13:09
 * @LastEditors: cy
 * @LastEditTime: 2021-02-04 11:23:32
-->
<template>
    <div>
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main class="content">
            <slot></slot>
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .header { color: red; }
    .content { color:  green; }
    .footer { color: blue;}
</style>
