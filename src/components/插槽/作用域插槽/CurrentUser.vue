<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-04 11:36:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-22 00:57:52
-->
<template>
    <span>
        <!-- <slot :user="user">{{ user.lastName }}</slot> -->
        <header>
            <slot name='header' :user="user"></slot>
        </header>
        <main>
            <slot name="main" :param="param"></slot>
        </main>
        <footer>
            <slot name="footer" :info="info"></slot>
        </footer>
    </span>
</template>

<script>
    export default {
        data() {
            return {
                param: { year: '2021' },
                info: { age: 112 },
                user: { firstName: 'chen', lastName: 'yin' }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>