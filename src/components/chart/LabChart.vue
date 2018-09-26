<template>
  <div>
  <GChart
    :settings="{packages: ['bar']}"
    :data="chartData"
    :options="chartOptions"
    :createChart="(el, google) => new google.charts.Bar(el)"
    @ready="onChartReady"
  />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: 'Labchart',
  components: {
    GChart
  },
  data () {
    return {
      chartsLib: null,
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Creatinine', 'Cholesterol', 'HDL Cholesterol'],
        ['2014', 61, 100, 50],
        ['2015', 170, 200, 60],
        ['2016', 56, 150, 80],
        ['2017', 104, 130, 85]
      ]
    }
  },
  computed: {
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Lab Results',
          subtitle: 'แสดงเฉพาะห้อง Lab (หมายเหตุ LL, HH = ค่าวิกฤต / L, H = ค่าต่ำหรือสูงกว่าค่าอ้างอิง)'
        },
        bars: 'horizontal', // Required for Material Bar Charts.
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
