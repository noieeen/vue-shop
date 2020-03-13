<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">COOLpRINTER</a>
            <div id="close-sidebar" @click="closeMenu">
              <i class="fas fa-times"></i>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img class="img-responsive img-rounded" src="img/user.png" alt="User picture" />
            </div>
            <div class="user-info">
              <span class="user-name">
                <strong>{{ Admin }}</strong>
              </span>
              <span class="user-role">{{ email }}</span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>

          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>General</span>
              </li>
              <li>
                <router-link to="/admin/overview">
                  <i class="fa fa-tachometer-alt"></i>

                  <span class="menu-text">Dashboard</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/customers">
                  <i class="fas fa-person-booth"></i>

                  <span class="menu-text">Customers</span>
                </router-link>
              </li>

              <!-- <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <span class="menu-text">Order</span>
                                <span class="badge badge-pill badge-danger">3</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Products

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Orders</a>
                                    </li>
                                    <li>
                                        <a href="#">Credit cart</a>
                                    </li>
                                </ul>
                            </div>
              </li>-->
              <li>
                <router-link to="/admin/orders">
                  <i class="fa fa-shopping-cart"></i>
                  <span class="menu-text">Orders</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/products">
                  <i class="fab fa-product-hunt"></i>
                  <span class="menu-text">Product</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/profile">
                  <i class="fas fa-user-tie"></i>
                  <span class="menu-text">Profile</span>
                </router-link>
              </li>
              <li>
                <a href="#" @click="logout()">
                  <i class="fa fa-power-off"></i>

                  <span class="menu-text">Logout</span>
                </a>
              </li>
              <!-- <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="far fa-gem"></i>
                                <span class="menu-text">Components</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">General</a>
                                    </li>
                                    <li>
                                        <a href="#">Panels</a>
                                    </li>
                                    <li>
                                        <a href="#">Tables</a>
                                    </li>
                                    <li>
                                        <a href="#">Icons</a>
                                    </li>
                                    <li>
                                        <a href="#">Forms</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="fa fa-chart-line"></i>
                                <span class="menu-text">Charts</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Pie chart</a>
                                    </li>
                                    <li>
                                        <a href="#">Line chart</a>
                                    </li>
                                    <li>
                                        <a href="#">Bar chart</a>
                                    </li>
                                    <li>
                                        <a href="#">Histogram</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="fa fa-globe"></i>
                                <span class="menu-text">Maps</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Google maps</a>
                                    </li>
                                    <li>
                                        <a href="#">Open street map</a>
                                    </li>
                                </ul>
                            </div>
                        </li>                                        
                        <li>
                            <a href="#">
                                <i class="fa fa-calendar"></i>
                                <span class="menu-text">Calendar</span>
                            </a>
              </li>-->
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
        <!-- sidebar-footer  -->
        <div class="sidebar-footer">
          <div>
            <a href="#" @click="logout()">
              <i class="">Logout</i>
            </a>
          </div>

          <div class="pinned-footer">
            <a href="#">
              <i class="fas fa-ellipsis-h"></i>
            </a>
          </div>
        </div>
      </nav>
      <!-- page-content  -->
      <main class="page-content pt-2">
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
import { fb, db } from "../firebase";

export default {
  name: "admin",
  data() {
    return {
      name: null,
      email: null
    };
  },
  components: {
    Hero
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
    this.Admin = "Admin"; //profile;
    //console.log(profile);
  }
};
</script>

<style lang="stylus"></style>
