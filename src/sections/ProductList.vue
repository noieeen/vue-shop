<template>
  <div class="" id="products">
    <div class="container " style="background-color: #fff;">
      
      <h1 class="text-center p-5">🖨️ COOLpRINTER Products 🖨️</h1>
      <div class="row">
        <div class="col-md-4" v-for="product in products">
          <div class="card product-item m-3">
            <carousel :perPage="1">
              <!--slide-->
              <slide v-for="(image, index) in product.images">
                <img :src="image" class="card-img-top" alt="..." width="250px" height="500px" @click="we(product)" />
              </slide>
            </carousel>

            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title">{{ product.name }}</h5>
                <h5 class="card-price">
                  {{
                  product.price
                  | currency("THB", 2, {
                  symbolOnLeft: false,
                  spaceBetweenAmountAndSymbol: true
                  })
                  }}
                </h5>
              </div>
              <h5 class="card-title">DETAILS</h5>
            <div class=" text ellipsis ">
              <p class="card-text text-concat" v-html="product.description" v-model="text" ></p>
              </div>
              <hr />
              <div class="row justify-evenly">
              <add-to-cart
                :image="getImage(product.images)"
                :p-id="product['.key']"
                :price="product.price"
                :name="product.name"
              ></add-to-cart>
              <router-link
            :to="{name : 'P_Detail',params:
          {id:product.name,
          name:product.name,
          images:getImage(product.images),
          description:product.description}}"
            tag="button"
            class="btn btn-outline-primary"
          >More Detail</router-link></div>
            </div>
          </div>
         
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  name: "Productslist",
  props: {
    msg: String
  },

  data() {
    return {
      products: [],
      product: {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: []
      },
      text: "",
      maxlength: 20
    };
  },

  methods: {
    getImage(images) {
      return images[0];
    },
    // we(product) {
    //   console.log(product.name);
    // }
  },

  firestore() {
    return {
      products: db.collection("products")
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  margin-top: 7rem;
  background: #f2f2f2;
  padding-bottom: 3rem;
}
.text {
  position: relative;
  font-size: 14px;
  color: black;
  width: 250px; /* Could be anything you like. */
}

.text-concat {
  position: relative;
  display: inline-block;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 3em; /* (Number of lines you want visible) * (line-height) */
  line-height: 1em;
  text-align:justify;
}

.text.ellipsis::after {
  //content: " . . .";
  position: absolute;
  right: -12px; 
  bottom: 4px;
}
</style>
