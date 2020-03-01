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
      item: this.$store.state.cart
    };
  },
  methods: {
    pdf() {
      //   var name = prompt("What is your name?");
      //   var multiplier = prompt("Enter a number:");
      //   multiplier = parseInt(multiplier);

      //   var doc = new jsPDF();
      //   doc.setFontSize(22);
      //   doc.text(20, 20, "Questions");
      //   doc.setFontSize(16);
      //   doc.text(20, 30, "This belongs to: " + name);

      //   for (var i = 1; i <= 12; i++) {
      //     doc.text(20, 30 + i * 10, i + " x " + multiplier + " = ___");
      //   }

      //   doc.addPage();
      //   doc.setFontSize(22);
      //   doc.text(20, 20, "Answers");
      //   doc.setFontSize(16);

      //   for (var i = 1; i <= 12; i++) {
      //     doc.text(
      //       20,
      //       30 + i * 10,
      //       i + " x " + multiplier + " = " + i * multiplier
      //     );
      //   }

      var doc = new jsPDF();
      // You can use html:
      doc.text("VUE SHOP", 20, 20);
      doc.autoTable({ html: "#my-table" });

      // Or JavaScript:
      doc.autoTable({
        head: [["Product Name", "Quantity", "Price"]],
        body: [
          ["David", "david@example.com", "Sweden"],
          ["Castille", "castille@example.com", "Norway"]
          // ...
        ]
      });
      doc.text("Total : ", 20, 80);
      doc.line(200, 90, 150, 90);
      doc.text("Signature", 165, 100);
      //doc.text(this.item.productName,10,150);
      doc.save("invoice.pdf");

      for (let i in this.item) {
        console.table(i);
      }
    }
  }
};
</script>
