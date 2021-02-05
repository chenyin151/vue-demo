/*
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-02-05 17:29:23
 * @LastEditors: cy
 * @LastEditTime: 2021-02-05 17:31:13
 */
import { h } from 'vue';

const DynamicHeading = (props, context) => {
    return h(`h${props.level}`, context.attrs, context.slots);
}

DynamicHeading.props = ['level']
export default DynamicHeading
