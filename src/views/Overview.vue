<template>
  <div class="container mt-5">
    <center>
      <h1 class="m-3 mb-5">Dashborad</h1>
    </center>

    <div class="row m-2">
      <div class="col">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
          <div class="card-header">Total Sale</div>
          <div class="card-body">
            <h2 class="card-title">
              {{ reports.totalSale | currency("", 2) }}
            </h2>
            <p class="card-text">THB.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
          <div class="card-header">New Orders</div>
          <div class="card-body">
            <h2 class="card-title">{{ reports.newOrder | currency("", 2) }}</h2>
            <p class="card-text">THB.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
          <div class="card-header">Customers</div>
          <div class="card-body">
            <h2 class="card-title">{{ reports.customer }}</h2>
            <p class="card-text">customer</p>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center pt-5">
      <div>
        <div
          class="card border-light mb-3"
          style="max-width: 500rem; max-height:1000rem;"
        >
          <div  v-if="!loadChart" class="card-header">Revinue Garaph</div>
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
    <div class="pt-5 pb-5">
      <h3>New Order</h3>
      <div class="mt-4">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Invoice</th>
              <th>User Email</th>
              <th>Pusrchase On</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, index) in orders">
              <th>{{ index + 1 }}</th>
              <td>{{ i.invoice }}</td>
              <td>{{ i.user.email }}</td>
              <td>{{ i.date }}</td>
              <td>{{ i.totalPrice | currency("", 2) }}</td>
              <td>
                <p
                  class="text-danger font-weight-bold"
                  v-if="i.status == 'Cancel'"
                >
                  {{ i.status }}
                </p>
                <p
                  class="text-success font-weight-bold"
                  v-if="i.status == 'Success'"
                >
                  {{ i.status }}
                </p>
                <p
                  class="text-warning font-weight-bold"
                  v-if="i.status == 'Panding'"
                >
                  {{ i.status }}
                </p>
                <p
                  class="text-primary font-weight-bold"
                  v-if="i.status == 'Upload'"
                >
                  {{ i.status }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbLineChart, mdbContainer } from "mdbvue";
import { db } from "../firebase";

export default {
  name: "Overview",
  props: {

    msg: String
  },
  components: {
    mdbLineChart,
    mdbContainer
  },

  firestore() {
    return {
      reports: db.collection("MIS").doc("report"),
      graphRevinue: db.collection("MIS").doc("graphRevinue"),
      orders: db
        .collection("orders")
        .orderBy("time", "desc")
        .limit(10)
    };
  },
  created() {
    
    // this.getCustomer();
  },
  data() {
    return {
      reports: [],
      // report: {
      //   customer: null,
      //   newOrder: null,
      //   totalSale: null
      // },
      //graphRevinue: [],
      loadChart: true,
      customer: [],
      revinue: [],

      lineChartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Customer",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data:  this.customer()
          },
          {
            label: "Revinue",
            backgroundColor: "rgba(151,187,205,0.2)",
            borderColor: "rgba(151,187,205,1)",
            borderWidth: 0.8,
            data: []
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
  },
  mounted (){
    this.getCustomer()
  },
  methods: {
    getCustomer(){
      console.log("12312313123123")
      let cityRef = db.collection("MIS").doc("graphRevinue");
      cityRef
        .get()
        .then(doc => {
          if (!doc.exists) {
            console.log("No such document!");
          } else {
            this.loadChart = false
            return doc.data().cus;
            // this.customer = doc.data().cus;
             
            doc.data().mouth;
            console.log("customer:", this.customer);
            // console.log('revinue:', this.revinue);
          }
        })
        .catch(err => {
          console.log("Error getting document", err);
        });
    },
    getRevinue() {
      let cityRef = db.collection("MIS").doc("graphRevinue");
      cityRef
        .get()
        .then(doc => {
          if (!doc.exists) {
            console.log("No such document!");
          } else {
            return doc.data().mouth;
            // console.log('customer:', this.customer);
            // console.log('revinue:', this.revinue);
          }
        })
        .catch(err => {
          console.log("Error getting document", err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
