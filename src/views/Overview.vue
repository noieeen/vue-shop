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
              {{ totalPrice | currency("", 2) }}
            </h2>
            <p class="card-text">THB.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
          <div class="card-header">New Orders</div>
          <div class="card-body">
            <h2 class="card-title">{{ LastOrder | currency("", 2) }}</h2>
            <p class="card-text">THB.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
          <div class="card-header">Orders</div>
          <div class="card-body">
            <h2 class="card-title">{{ countOrder }}</h2>
            <p class="card-text">Orders</p>
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
          <div class="card-header">Revinue Garaph</div>

          <mdb-container>
            <mdb-bar-chart
              :data="lineChartData1"
              :options="lineChartOptions1"
              :width="600"
              :height="300"
            ></mdb-bar-chart>
          </mdb-container>
        </div>
        <div
          class="card border-light mb-3"
          style="max-width: 500rem; max-height:1000rem;"
        >
          <div class="card-header">Customer Garaph</div>

          <mdb-container>
            <mdb-bar-chart
              :data="lineChartData"
              :options="lineChartOptions"
              :width="600"
              :height="300"
            ></mdb-bar-chart>
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
import { mdbBarChart, mdbContainer } from "mdbvue";
import { db } from "../firebase";

export default {
  name: "Overview",
  props: {
    msg: String
  },
  components: {
    mdbBarChart,
    mdbContainer
  },

  firestore() {
    return {
      reports: db.collection("MIS").doc("report"),
      graphRevinue: db.collection("MIS").doc("graphRevinue"),
      orders: db.collection("orders").orderBy("time", "desc")
    };
  },
  created() {
    // this.getCustomer();
  },
  data() {
    return {
      totalPrice: 0,
      reports: [],
      // report: {
      //   customer: null,
      //   newOrder: null,
      //   totalSale: null
      // },
      //graphRevinue: [],
      countOrder:0,
      loadChart: true,
      customer: [],
      revinue: [],
      LastOrder: 0,
      lineChartData: {},
      lineChartData1: {},
      lineChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barPercentage: 1,
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
      },
      lineChartOptions1: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barPercentage: 1,
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
  mounted() {
    this.getCustomer();
    this.getTotalSale();
  },
  methods: {
    getCustomer() {
      console.log("12312313123123");
      let cityRef = db.collection("MIS").doc("graphRevinue");
      cityRef
        .get()
        .then(doc => {
          if (!doc.exists) {
            console.log("No such document!");
          } else {
            this.loadChart = false;
            this.lineChartData = {
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
                  label: "customer",
                  data: doc.data().cus,
                  backgroundColor: "rgba(255, 99, 132, 0.2)",

                  borderColor: "rgba(255,99,132,1)",
                  borderWidth: 1
                }
              ]
            };
            this.lineChartData1 = {
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
                  label: "Revinue",
                  data: doc.data().mouth,
                  backgroundColor: "rgba(54, 162, 235, 0.2)",

                  borderColor: "rgba(54, 162, 235, 1)",
                  borderWidth: 1
                }
              ]
            };
          }
        })
        .catch(err => {
          console.log("Error getting document", err);
        });
    },
    getTotalSale() {
      let ordersRef1 = db
        .collection("orders")
        .orderBy("invoice", "desc")
        .limit(1);
      console.log(ordersRef1);
      const ordersRef = db.collection("orders").orderBy("invoice", "desc");
      let allOrders = ordersRef
        .get()
        .then(snapshot => {
          let i = 0;
          snapshot.forEach(doc => {
            //console.log(doc.id)
            if (i<1) {
              this.LastOrder = doc.data().totalPrice;
            }
            // } console.log(doc.data().amount)
            // console.log(this.totalPrice);
            if (doc.data().status == "Success") {
              this.totalPrice += doc.data().totalPrice;
            }
            
            i++;
this.countOrder = i;
            //console.log(checkPdf);
          });
          
        })
        
        .catch(err => {
          console.log("Error getting documents", err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
