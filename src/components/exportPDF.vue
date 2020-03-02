<template>
  <div>
    <div class="exportPDF">
      <button class="btn btn-primary" @click="pdf">Export PDF</button>
    </div>
  </div>
</template>

<script>
import { fb, db } from "firebase";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default {
  name: "exportPDF",
  data() {
    return {
      item: this.$store.state.cart,
      totalPrice: this.$store.getters.totalPrice
    };
  },
  methods: {
    pdf() {
      var item = this.item;

      //console.log(item[0].productName);

      var head = [["Product Name", "Product Quantity", "Price"]];
      var body = [];

      for (let i in item) {
        body.push([item[i].productName, item[i].productQuantity, "price"]);
      }

      var doc = new jsPDF();
      doc.setFontSize(20);
      doc.setFont("helvetica");
      doc.setFontType("bold");
      doc.text("NHAMHA SHOP", 20, 35);

      doc.setFontSize(12);
      doc.setFont("default");
      doc.setFontType("normal");
      doc.text("Name : ", 130, 20);
      doc.text("Company Name : ", 130, 25);
      doc.text("Company Address : ", 130, 30);
      doc.text("Company Email : ", 130, 35);
      doc.text("Company Phone : ", 130, 40);
      doc.text("Order Tag : ", 130, 45);
      doc.text("Date Order : ", 130, 50);
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
