<template>
    <div>
           <div class="navbar-custom">
                <ul class="list-unstyled topnav-menu float-right mb-0">

                    <li class="dropdown notification-list">
                        <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <img src="/images/spotter-logo.svg" alt="user-image" class="rounded-circle">
                            <span class="pro-user-name ml-1" v-if="user">
                                Busayo Dawodu<i class="mdi mdi-chevron-down"></i> 
                            </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                           
                            <div class="dropdown-header noti-title">
                                <h6 class="text-overflow m-0">Welcome !</h6>
                            </div>

                            <a href="javascript:void(0);" class="dropdown-item notify-item" >
                                <i class="fe-log-out"></i>
                                <span>Logout</span>
                            </a>

                        </div>
                    </li>

                </ul>

                <!-- LOGO -->
                <div class="logo-box">
                    <a href="index.html" class="logo text-center">
                        <span class="logo-lg">
                            
                            <b>SPOTTR</b>
                           
                        </span>
                        <span class="logo-sm">
                            <b>SPOTTER</b>
                        </span>
                    </a>
                </div>

                <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
                    <li>
                        <button class="button-menu-mobile disable-btn waves-effect" @click="toggleSideBar">
                            <i class="fe-menu"></i>
                        </button>
                    </li>

                    <li>
                        <h2 class="page-title-main">{{ title ? title : 'Dashboard' }} </h2>
                    </li>
        
                </ul>
               
            </div>
            

            
    </div>

    
</template>
<script>
// import Auth from '~/utils/auth'
import{mapMutations} from 'vuex'
import {eventBus} from '@/plugins/bus'
export default {
   
    data(){
    return{
        user:{},
        title:'',
        header: this.title
    }
    },
    methods: {
        // getUserDetails() {
        //     if(process.browser) {
        //         this.user = Auth.getUser()
        //     }
          
        // },
        // async logOutAdmin(){
        //     console.log('called');
        //     try{
        //         let request = await this.$http.post('/auth/logout')
        //         Auth.logoutUser()
        //         console.log('logged out')
        //        this.$router.push('/login')
        //     }catch(err){
        //         console.log(err)
        //     }
            
        // },
        ...mapMutations({
            toggleSideBar: 'isOpen/toggleSideBar'
        })
    },
    created() {
        // this.getUserDetails();
        this.$bus.$on("changeIt", (data) => {
            this.title = data
        })

        this.title = 'Dashboard'
    }
}
</script>
<style scoped>
.page-title-main{
    -webkit-animation: 1s ease-out 0s normal forwards 1 fadein;
    animation: 1s ease-out 0s normal forwards 1 fadein;
    color: white !important
}

@keyframes fadein{
    0% { opacity:0; }
    66% { opacity:0; }
    100% { opacity:1; }
    }
    .navbar-custom{
        background-color: #274B89 !important;
        
    }
.logo-box{
    background-color: #274B89 !important;
}
.pro-user-name{
    color: white
}
</style>