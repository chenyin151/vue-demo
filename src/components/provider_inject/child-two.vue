<!--
 * @Author: your name
 * @Date: 2021-08-12 00:27:20
 * @LastEditTime: 2021-08-12 00:33:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\components\provider\inject\child-two.vue
-->
<template>
    <div>
        {{demo}}
    </div>
</template>

<script>
    export default {
        name: '',
        inject: ['message'],
        data() {
            return {
                demo: this.message
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>