<template>
  <div>
    <div class="exportPDF">
      <button class="btn btn-primary" @click="pdf">Export Quotation</button>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default {
  name: "exportPDF",
  data() {
    return {
      item: this.$store.state.cart,
      totalPrice: this.$store.getters.totalPrice,
      profile: {
        fname: null,
        lname: null,
        phone: null,
        comName: null,
        comAddress: null,
        fax: null,
        comEmail: null,
        country: null,
        zipcode: null
      }
    };
  },
  firestore() {
    const user = fb.auth().currentUser;
    return {
      profile: db.collection("profiles").doc(user.uid)
    };
  },
  methods: {
    pdf() {
      var item = this.item;

      //console.log(item[0].productName);

      var head = [["Product Name", "Product Quantity", "Price"]];
      var body = [];

      for (let i in item) {
        body.push([
          item[i].productName,
          "X " + item[i].productQuantity,
          item[i].productPrice
        ]);
      }

      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

      var doc = new jsPDF();
      doc.setFontSize(20);
      doc.setFont("helvetica");
      doc.setFontType("bold");
      doc.text("PRINTER SHOP", 20, 35);

      doc.setFontSize(12);
      doc.setFont("default");
      doc.setFontType("normal");
      doc.text("Name : ", 127, 20);
      doc.text(this.profile.fname + "  " + this.profile.lname, 140, 20);
      doc.text("Company Name : ", 109, 25);
      doc.text(this.profile.comName, 140, 25);
      doc.text("Company Address : ", 105, 30);
      doc.text(this.profile.comAddress,140, 30);
      doc.text("Company Email : ", 109, 35);
      doc.text(this.profile.comEmail, 140, 35);
      doc.text("Company Phone : ", 109, 40);
      doc.text(this.profile.phone, 140, 40);
      doc.text("Order Tag : ", 119, 45);
      doc.text(this.profile[".key"],140, 45);
      doc.text("Date Order : ", 118, 50);
      doc.text(date, 140, 50);
      doc.autoTable({ head: head, body: body, margin: { top: 60 } });

      doc.text("Total : " + this.totalPrice, 20, 150);
      doc.line(200, 200, 150, 200);
      doc.text("Signature", 165, 210);
      //doc.text(this.item.productName,10,150);
      doc.save("invoice.pdf");
    }
  }
};
</script>
