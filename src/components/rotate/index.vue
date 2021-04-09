<!--
 * @Author: your name
 * @Date: 2021-02-21 09:47:50
 * @LastEditTime: 2021-02-21 09:48:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\components\rotate\index.vue
-->
<template>
    <div>
        <div :class="[classNameA, classNameB]"></div>
        <div :class="{ className: data }"></div>
        <div :style="{ fontSize: data + 'px' }"></div>
        <div :class="[classNameA, {classNameB : condition}]"></div>
        <template v-slot:name>defaultcontent</template>
        <input v-model.number="numData" type="number" step="1" />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>