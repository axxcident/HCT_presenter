<script lang="ts">

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  components: {
    Line
  },
  data() {
    return {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Happiness',
            backgroundColor: '#3366CC',
            borderColor: '#3366CC',
            borderDash: [],
            data: [4, 3, 2, 2.5, 4, 5]
          },
          {
            label: 'Productivity',
            backgroundColor: '#DC3912',
            borderColor: '#DC3912',
            borderDash: [],
            data: [1, 2.5, 3.5, 4, 3, 2.2]
          },
          {
            label: 'Stress',
            backgroundColor: '#FF9900',
            borderColor: '#FF9900',
            borderDash: [5,5],
            data: [5, 4, 4, 3, 3.3, 2]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  }
}
</script>

<template>
  <Line :data="data" :options="options" />
</template>

<style>
  .chart-container canvas {
    background-color: rgba(255, 255, 255, 1); /* White background color */
  }
</style>
