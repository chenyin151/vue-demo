<!--
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-04 11:37:33
 * @LastEditors: cy
 * @LastEditTime: 2021-02-04 13:48:57
-->
<template>
    <div>
        <current-user>
            <!-- 动态插槽名 -->
            <template v-slot:[slotName]="{ user = { firstName : 'Guest'}}">
                {{ user.firstName }}
            </template>
            <template #main="{ param }">
                Hello {{param.year}}
            </template>
            <template v-slot:footer="{ info }">
                {{ info.age }}
            </template>
        </current-user>
        <!-- 独占默认插槽的缩写方法 -->
        <!-- <current-user v-slot="slotProps">
            {{slotProps.user.firstName}}
        </current-user> -->
    </div>
</template>

<script>
    import CurrentUser from "./CurrentUser.vue"
    export default {
        data() {
            return {
                slotName: 'header',
                slotMain: 'main'
            }
        },
        components: {
            CurrentUser,
        },
    }
</script>

<style lang="less" scoped>

</style>