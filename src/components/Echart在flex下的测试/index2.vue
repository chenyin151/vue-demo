<template>
  <!-- <Demo1 /> -->
  <div :key="3" style="display: flex; flex-direction: column;">
    <div style="flex: 1;"><IEcharts :option="options" ref="echart" :resizable="true"></IEcharts></div>
    <div style="flex: 1;"><IEcharts :option="options" ref="echart1" :resizable="true"></IEcharts></div>
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
export default {
  name: 'Resize',
  props: {
  },
  data() {
    return {
      options: {
        title: {
        },
        // 悬浮提示
        tooltip: {
          show: true,
          trigger: 'axis',
          backgroundColor: '#fff',
          textStyle: { color: '#4B9BFB' },
          extraCssText: 'box-shadow: 0px 2px 5px 0px rgba(50,107,174,0.19);'
        },
        xAxis: {
            type: 'category',
            data: [],
            itemStyle: {
              show: false
            }
        },
        yAxis: {
          name: '单位：mm/s',
          type: 'value',
          axisLine: {
            show:true,
          },
        },
        series: [{
            // name: '数据',
            showSymbol: true,//是否默认展示圆点
            symbol: 'circle',     //设定为实心点
            data: [],
            color: "#4786FF",
            symbolSize: 6,
            type: 'line',
            // 设置折线图的颜色
            normal: {
                color: "#1F824E", //改变折线点的颜色
            },
            lineStyle: {
              width: 1,
              color: '#4786FF',
            }
        }],
        dataZoom: [
          {
            show: false,
            realtime: true,
            start: 0,
            end: 5,
            height: 8, //组件高度
            left: 0, //左边的距离
            right: 0, //右边的距离
            bottom: 0, //右边的距离
            handleColor: '#D3DCFD', //h滑动图标的颜色
            handleStyle: {
              borderColor: '#D3DCFD',
              borderWidth: '1',
              shadowBlur: 2,
              background: '#D3DCFD',
              shadowColor: '#D3DCFD',
            },
            backgroundColor: '#f4f7f9', //两边未选中的滑动条区域的颜色
            showDataShadow: false, //是否显示数据阴影 默认auto
            showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
            // xAxisIndex: [0]
          },
          {
              type: 'inside',
              realtime: true,
              start: 0,
              end: 5,
          },
        ],
        itemStyle : { normal: {label : {show: true}}}
      },
      options1: {
        title: {
        },
        // 悬浮提示
        tooltip: {
          show: true,
          trigger: 'axis',
          backgroundColor: '#fff',
          textStyle: { color: '#4B9BFB' },
          extraCssText: 'box-shadow: 0px 2px 5px 0px rgba(50,107,174,0.19);'
        },
        xAxis: {
            type: 'category',
            data: [],
            itemStyle: {
              show: false
            }
        },
        yAxis: {
          name: '单位：mm/s',
          type: 'value',
          axisLine: {
            show:true,
          },
        },
        series: [{
            // name: '数据',
            showSymbol: true,//是否默认展示圆点
            symbol: 'circle',     //设定为实心点
            data: [],
            color: "#4786FF",
            symbolSize: 6,
            type: 'line',
            // 设置折线图的颜色
            normal: {
                color: "#1F824E", //改变折线点的颜色
            },
            lineStyle: {
              width: 1,
              color: '#4786FF',
            }
        }],
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 5,
            height: 8, //组件高度
            left: 0, //左边的距离
            right: 0, //右边的距离
            bottom: 0, //右边的距离
            handleColor: '#D3DCFD', //h滑动图标的颜色
            handleStyle: {
              borderColor: '#D3DCFD',
              borderWidth: '1',
              shadowBlur: 2,
              background: '#D3DCFD',
              shadowColor: '#D3DCFD',
            },
            backgroundColor: '#f4f7f9', //两边未选中的滑动条区域的颜色
            showDataShadow: false, //是否显示数据阴影 默认auto
            showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
            // xAxisIndex: [0]
          },
          {
              type: 'inside',
              realtime: true,
              start: 0,
              end: 5,
          },
        ],
        itemStyle : { normal: {label : {show: true}}}
      },
    }
  },
  updated() {
    // console.log(Demo1, Demo2)
  },
  methods: {
    resizeTheChart() {
      if (this.$refs.echart) {
        // this.$refs.echart.resize();
        // this.$refs.echart1.resize();
      }
    },
  },
    mounted(){
    // console.log(this.ammoniaData)
    window.addEventListener("resize", this.resizeTheChart);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeTheChart);
  },  
  components: {
      IEcharts
    },
}
</script>
