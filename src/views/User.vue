<template>
  <div class="user">
    <Navbar/>
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
  
      <!-- page-content  -->
      <main class="">
        <router-view></router-view>
      </main>
      <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from "@/components/Hero.vue";
import { fb , db } from "../firebase";
import Navbar from "@/components/NavbarUser.vue";
export default {
  name: "user",
  data() {
    return {
      name: null,
      email: null
    };
  },
  components: {
    Hero,
    Navbar
  },
  methods: {
    closeMenu() {
      if ($(".page-wrapper").hasClass("pinned")) {
        // unpin sidebar when hovered
        $(".page-wrapper").removeClass("pinned");
        $("#sidebar").unbind("hover");
      } else {
        $(".page-wrapper").addClass("pinned");
        $("#sidebar").hover(
          function() {
            console.log("mouseenter");
            $(".page-wrapper").addClass("sidebar-hovered");
          },
          function() {
            console.log("mouseout");
            $(".page-wrapper").removeClass("sidebar-hovered");
          }
        );
      }
    },
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch(error => {
          console.log(error);
        });
       
    }
  },
  created() {
    var user = fb.auth().currentUser;
   //var profile = db.collection("profiles").doc(user.uid)
    this.email = user.email;
    this.Admin = 'ยังไม่ได้'//profile;
    //console.log(profile);
  }
};
</script>

<style lang="stylus"></style>
