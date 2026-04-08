<template>
  <div>
    <div class="mx-2">
      <div class="text-h4 mt-2 mb-6 primary--text" style="font-weight: bold">
        Dashboard
      </div>

      <div class="my-7 pt-7">
        <v-row class="justify-center">
          <v-col v-for="(item, index) in cards" :key="index" cols="9" md="3" sm="6">
            <v-hover v-slot="{ hover }">
              <v-card class="px-2" :style="`border-bottom:2px solid ; border-color:${item.color}`"
                :class="{ 'on-hover': hover }">
                <v-card-title class="grey--text">{{ item.title }}</v-card-title>
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <v-card-subtitle class="text-h5 grey--text">{{ item.number }}
                    </v-card-subtitle>
                  </div>

                  <div class="px-3">
                    <v-btn :style="`background:${item.bgColor}`">
                      <v-icon :style="`color:${item.color}`"> mdi-home </v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
        <v-row>
          <!-- Sales Overview Chart -->
          <v-col cols="12" md="8">
            <v-card class="pa-4">
              <v-card-title>Sales Overview</v-card-title>
              <v-card-text>
                <canvas id="salesChart"></canvas>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Products by Category Chart -->
          <v-col cols="12" md="4">
            <v-card class="pa-4">
              <v-card-title>Products by Category</v-card-title>
              <v-card-text>
                <canvas id="categoryChart"></canvas>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Customer Growth Chart -->
          <v-col cols="12">
            <v-card class="pa-4">
              <v-card-title>Customer Growth</v-card-title>
              <v-card-text>
                <canvas id="customerChart"></canvas>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
export default {
  data() {
    return {
      salesChartInstance: null,
      categoryChartInstance: null,
      customerChartInstance: null,
      cards: [
        {
          title: "All Products",
          number: 800,
          color: "#FFA726",
          bgColor: "#ffdfa6",
        },
        {
          title: "All Orders",
          number: 1000,
          color: "#00695C",
          bgColor: "#B2DFDB",
        },
        {
          title: "All Categories",
          number: 400,
          color: "#F4511E",
          bgColor: "#FFCCBC",
        },
        {
          title: "All Users",
          number: 30,
          color: "#37474F",
          bgColor: "#B0BEC5",
        },
      ],
    };
  },
  mounted() {
    this.initCharts();
  },
  beforeDestroy() {
    // Clean up charts to prevent memory leaks
    if (this.salesChartInstance) this.salesChartInstance.destroy();
    if (this.categoryChartInstance) this.categoryChartInstance.destroy();
    if (this.customerChartInstance) this.customerChartInstance.destroy();
  },
  methods: {
    initCharts() {
      // 1. Sales Overview (Line Chart)
      const salesCtx = document.getElementById('salesChart').getContext('2d');
      this.salesChartInstance = new Chart(salesCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Sales ($)',
            data: [1200, 1900, 3000, 5000, 2300, 3400],
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            tension: 0.4,
            fill: true
          }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });

      // 2. Products by Category (Doughnut Chart)
      const categoryCtx = document.getElementById('categoryChart').getContext('2d');
      this.categoryChartInstance = new Chart(categoryCtx, {
        type: 'doughnut',
        data: {
          labels: ['Electronics', 'Clothing', 'Home', 'Books'],
          datasets: [{
            data: [30, 20, 15, 35],
            backgroundColor: ['#a5a58d', '#98c1d9', '#2c7da0', '#4f5d75']
          }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });

      // 3. Customer Growth (Bar Chart)
      const customerCtx = document.getElementById('customerChart').getContext('2d');
      this.customerChartInstance = new Chart(customerCtx, {
        type: 'bar',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [{
            label: 'New Customers',
            data: [50, 75, 60, 90],
            backgroundColor: '#673AB7'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    }
  },
};
</script>

<style>
.on-hover {
  animation: move 1s forwards 1 ease-in-out;
  position: relative;
}

@keyframes move {
  0% {
    bottom: 0px;
  }

  100% {
    bottom: 12px;
  }
}
</style>
<style scoped>
/* Ensure charts fit nicely */
canvas {
  max-height: 400px;
}
</style>