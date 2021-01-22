/*
 * @Description: 路由表
 * @version: 0.0.1
 * @Author: cy
 * @Date: 2020-05-11 09:30:23
 * @LastEditors: cy
 * @LastEditTime: 2021-01-14 17:27:36
 */
import Router from "vue-router";
import Vue from 'vue';
// const InjectTest = () => import('@/components/inject/InjectTest.vue');
Vue.use(Router);
const appRouter = {
    mode: 'hash',
    base: '/',
    routes: [
        // {
        //     name: 'injectTest',
        //     path: '/injectTest',
        //     component: InjectTest
        // }
    ]
}

export default new Router(appRouter);