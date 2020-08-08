<template>
  <div>
    <!-- ========== Left Sidebar Start ========== -->
    <div class="left-side-menu">
      <div class="slimscroll-menu">
        <!-- User box -->
        <div class="user-box text-center">
          <img
            src="/images/spotter-logo.svg"
            alt="user-img"
            title="Admin"
            class="rounded-circle img-thumbnail avatar-lg"
          />
          <div class="dropdown">
            <a
              href="#"
              class="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
              data-toggle="dropdown"

              > </a
            >

            <div class="dropdown-menu user-pro-dropdown">
              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="fe-user mr-1"></i>
                <span>My Account</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="fe-settings mr-1"></i>
                <span>Settings</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="fe-lock mr-1"></i>
                <span>Lock Screen</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="fe-log-out mr-1"></i>
                <span>Logout</span>
              </a>
            </div>
          </div>
          <h5 class=" admin-name"> Hello! Admin Head</h5>
        </div>

        <!--- Sidemenu -->
        <div id="sidebar-menu">
          <ul class="metismenu mt-5" id="side-menu">
            <li class="menu-title">Navigation</li>

            <li @click="dashboard" ref="dashboard">
              <nuxt-link to="/userhome" href="#">
                <i class="mdi mdi-view-dashboard"></i>
                <span>Dashboard</span>
              </nuxt-link>
            </li>
            <!-- <li class="drop">
              <a href="javascript: void(0);" @click="users">
                <i class="mdi mdi-account"></i>
                <span>Users</span>
                <span class="menu-arrow"></span>
              </a>
              <ul
                class="nav-second-level closed"
                aria-expanded="false"
                v-if="fallThree"
              >
             
                  <li class="users" @click="allusers">
                    <NuxtLink to="/users" :key="2">
                    All Users
                  </NuxtLink>
                  </li>

                   <li class="users" @click="coporateUsers">
                <NuxtLink to="/users/coporate-users" :key="1">
                    Coporate Users
                  </NuxtLink>
              </li>
                  
              </ul>
            </li> -->

            <li @click="request">
              <nuxt-link to="/request" >
                <i class="mdi mdi-dns"></i>
                <span> Requests </span>
              </nuxt-link>
            </li>

            <li  @click="wallet">
              <nuxt-link to="/wallet">
                <i class="mdi mdi-credit-card"></i>
                <span> Wallet </span>
              </nuxt-link>
            </li>

            <!-- <li @click="payout">
              <nuxt-link to="/withdrawals">
                <i class="mdi mdi-credit-card-multiple"></i>
                <span> Withdrawals </span>
              </nuxt-link>
            </li> -->
            <!-- <li @click="opportunity">
              <nuxt-link to="/opportunity">
                <i class="mdi mdi-bank"></i>
                <span> Opportunities </span>
              </nuxt-link>
            </li> -->
            <!-- <li @click="task">
              <nuxt-link to="/tasks">
                <i class="mdi mdi-calendar-check-outline"></i>
                <span> Tasks</span>
              </nuxt-link>
            </li> -->
          </ul>
        </div>
        <!-- End Sidebar -->
      </div>
      <!-- End Sidebar -->

      <div class="clearfix"></div>
    </div>
    <!-- Sidebar -left -->
  </div>
</template>
<script>
// import Auth from '~/utils/auth'
import { eventBus } from "@/plugins/bus";
export default {
  props: ["sideBarItem"],
  data() {
    return {
      fallThree: false,
      user:{},
      sideBar : this.sideBarItem
    };
  },
  methods: {
    // users() {
    //   this.fallThree = !this.fallThree;
    //   this.sideBar  = "Users";
    //   this.$bus.$emit("changeIt", "Users");
    //   // console.log(this.$refs)
    // },
    request() {
      console.log('hi');
      // this.fallFour = !this.fallFour;
      this.sideBar = "Requests";
      this.$bus.$emit("changeIt", "Requests");
      console.log("change it")
    },
    wallet() {
      this.fallFive = !this.fallFive;
      this.sideBar = "Wallet";
      this.$bus.$emit("changeIt", "Wallet");
    },
    // payout() {
    //   // this.fallSix = !this.fallSix;
    //   this.sideBar = "Payouts";
    //   this.$bus.$emit("changeIt", "Payouts");
    // },
    dashboard() {
      this.sideBar = "Dashboard";
      this.$bus.$emit("changeIt", "Dashboard");
    },
    // coporateUsers(){
    //   this.sideBar = "Corporate Users";
    //   this.$bus.$emit("changeIt", "Corporate Users")
    // },
    // allusers(){
    //   this.sideBar = "All Users";
    //   this.$bus.$emit("changeIt", "All Users")
    // },  
    // opportunity(){
    //   this.sideBar = "Opportunities";
    //   this.$bus.$emit("changeIt", "Opportunities")
    // }, 
    // task(){
    //   this.sideBar = 'Tasks';
    //   this.$bus.$emit("changeIt", "Tasks")
    // }
  },
};
</script>
<style scoped>
.left-side-menu {
  overflow-y: scroll;
  background: #274B89 !important;
}
.left-side-menu::-webkit-scrollbar {
  width: 5px;
}
.left-side-menu::-webkit-scrollbar-thumb {
  background: #274B89 !important;
  border-radius: 20px;
}
ul > li {
  color: white !important;
  
}
li {
  margin-left: 20px;
  color: white !important;
  padding: 5px 5px;
  transition: 0.5s;
}
li:hover {
  color: lightblue;
  margin-left: 5px;
}
.drop {
  transition: all 1s ease-out;
  max-height: 300px;
}
span{
    color: white !important
}
/* .closed{
  max-height: 0
} */

.users{
  margin-top: 15px
}
.mdi{
    color:white !important;
}
.admin-name{
    color: white !important
}
</style>
