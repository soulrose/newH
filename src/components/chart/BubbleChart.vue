<template>
  <div>
  <GChart
        type="BubbleChart"
        :data="chartData"
        :options="chartOptions"
        style="width: auto; height: 500px;"
      />

  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: 'Areachart',
  components: {
    GChart
  },
  data () {
  return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["ID", "X", "Y", "Temperature"],
        ["", 80, 167, 120],
        ["", 79, 136, 130],
        ["", 78, 184, 50],
        ["", 72, 278, 230],
        ["", 81, 200, 210],
        ["", 72, 170, 100],
        ["", 68, 477, 80]
      ],
      chartOptions: {
        colorAxis: { colors: ["yellow", "red"] }
      }
    };
  },
  computed: {
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Lab Results',
          subtitle: 'แสดงเฉพาะห้อง Lab (หมายเหตุ LL, HH = ค่าวิกฤต / L, H = ค่าต่ำหรือสูงกว่าค่าอ้างอิง)'
        },
        bars: 'radar',
        hAxis: { format: 'decimal' },
        height: 400,
        colors: ['#678e95', '#9ecbe1', '#97cfc1']
      })
    }
  },
  methods: {
    onChartReady (chart, google) {
      this.chartsLib = google
    }
  }
}
</script>
