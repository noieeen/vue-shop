<template>
  <div class="container mt-5 ">
    <center>
      <h1 class="m-3">อีเหี้ย</h1>
    </center>

    <div class="row m-2">
      <div class="col">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
          <div class="card-header">Total Sale</div>
          <div class="card-body">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">
              THB.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
          <div class="card-header">New Orders</div>
          <div class="card-body">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">
              THB.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
          <div class="card-header">Customers</div>
          <div class="card-body">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">
              THB.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center ">
      <div>
        <div class="card border-light mb-3" style="max-width: 500rem; max-height:1000rem;">
        <div class="card-header">Revinue</div>
          <mdb-container>
            <mdb-line-chart
              :data="lineChartData"
              :options="lineChartOptions"
              :width="900"
              :height="400"
            ></mdb-line-chart>
          </mdb-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbLineChart, mdbContainer } from "mdbvue";

export default {
  name: "Overview",
  props: {
    msg: String
  },
  components: {
    mdbLineChart,
    mdbContainer
  },
  data() {
    return {
      lineChartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            backgroundColor: "rgba(151,187,205,0.2)",
            borderColor: "rgba(151,187,205,1)",
            borderWidth: 0.8,
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      },
      lineChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ]
        }
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
