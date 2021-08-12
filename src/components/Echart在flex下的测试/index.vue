<template>
    <div  ref="wrapper"  style="border: 1px solid red; display: flex; flex-direction:row;">
        <div style="flex: 1; min-width: 100px;">
                <v-chart class="chart" autoresize :option="option" />
        </div>
        <div style="flex: 1; min-width: 100px;">
            <v-chart class="chart" autoresize :option="option" />
        </div>
        
    </div>
</template>

<script>
import "echarts";
import VChart, { THEME_KEY } from "vue-echarts";

export default {
  name: "HelloWorld",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "dark"
  },
  mounted () {
      window.onresize = () => {
        //   console.log('resize', this.$refs.wrapper.getBoundingClientRect().width);
        //   this.width = this.$refs.wrapper.getBoundingClientRect().width + 'px'
      };
  },
  data() {
    return {
        width: 0,
      option: {
         xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
        }
    }]
      }
    };
  }
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>