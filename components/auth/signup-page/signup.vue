<template>
  <div id="sign-up">

     <div class="d-flex justify-content-center">
        <div class="logo">
            <nuxt-link to="/">
            <img src="images/logo.svg" alt="logo" class="logo">
            </nuxt-link>
        </div>
        <h1 class="ml-3">Spottr</h1>
    </div>
    <p class="text-secondary text-center">Please create a new account here</p>


    
        <div >
               <center>
                <form action="" class="align-self-center">
                    <div class="col-lg-5 form-group">
                        <input type="text" class="form-control" placeholder="First name" required v-model="data.first_name">
                    </div>
                    <div class="col-lg-5 form-group">
                        <input type="text" class="form-control" placeholder="Last name" required v-model="data.last_name">
                    </div>
                    <div class="col-lg-5 form-group">
                        <input type="text" class="form-control" placeholder="Company's name" required v-model="data.company_name">
                    </div>
                    <div class="col-lg-5  form-group row">
                        
                        <div class="col-lg-6 p-0">
                            <input type="text" class="form-control" placeholder="Company's CAC No." required v-model="data.cac_number">
                        </div>
                        <div class="col-lg-6 p-0 pl-2">
                            <input type="text" class="form-control" placeholder="Phone no" required v-model="data.phone_number">
                            <div v-if="errors.phone_number">
                            <p class="error"  v-for="(error, index) in errors.phone_number" :key="index">{{error}}!</p>
                        </div>
                        </div>
                        
                        
                    </div>
                    
                    <div class="col-lg-5 form-group">
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Company's E-mail" required v-model="data.email">
                        <div v-if="errors.email">
                            <p class="error"  v-for="(error, index) in errors.email" :key="index">{{error}}!</p>
                        </div>
                    </div>
                    
                    <div class="col-lg-5 form-group">
                        <!-- <div class="form-row">
                            <div class="form-group col">
                              <input type="text" class="form-control" id="inputCountry" placeholder="Country">
                            </div>
                            <div class="form-group col">
                                <input type="text" class="form-control" id="inputState" placeholder="State">
                            </div>
                            <div class="form-group col">
                              <input type="text" class="form-control" id="inputCity" placeholder="City">
                            </div>
                        </div> -->
                        <input type="text" class="form-control" id="address" placeholder="Company's Address" v-model="data.address">
                    </div>
                      <div class="form-group col-lg-5">
                          <input type="password" class="form-control rounded-lg" id="inputPassword" placeholder="Password" required v-model="data.password">
                          <div v-if="errors.password">
                            <p class="error"  v-for="(error, index) in errors.password" :key="index">{{error}}!</p>
                        </div>
                        </div>
                        
                        <div class="form-group col-lg-5">
                            <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm Password" required v-model="data.confirm_password">
                        </div>
                        <!-- <div class="error">
                            <p class="error" v-for="(error, index) in errors" :key="index"> !{{errors}}</p>
                        </div> -->
                        <div class="form-group col-lg-5 mt-lg-3">
                            <button class="btn btn-primary mx-auto" @click.prevent="signUp">Sign Up</button>
                            <!-- <input class="btn btn-block form-button text-white mt-3 rounded-lg"  value="Sign Up" @click.prevent="signUp"> -->
                            <small id="emailHelp" class="form-text text-muted text-right">Already have an account? <nuxt-link to="/login">Log In</nuxt-link></small>
                        </div>
                        
  
                </form>
               </center>
        </div>

  </div>
</template>

<script>
import Auth from '~/utils/auth'
export default {
    data(){
        return {
            data:{
                first_name :"",
                last_name:"",
                company_name:"",
                cac_number:"",
                email:"",
                address:"",
                password:"",
                confirm_password:"",
                phone_number: ''
            },      
             errors: {}
        }
    },
    methods:{
        async signUp(){
            try{
                let response = await this.$http.post('/auth/create/cooperate-user', this.data)
                console.log(response)
                let token = request.data.data.token;
                let user = request.data.data.user;
                Auth.loginUser(user,token);
                this.$router.push({
                    path:"/verifynumber"
                })
            }catch(err){
                console.log(err)
                let error = err.response.data.message
                console.log(error)
                let errors = err.response.data.errors;
                console.log(errors)
                this.errors = errors
                
                // swal('Oops', "sorry", "error" )
            }
        }
    }

}
</script>

<style scoped>
#sign-up {
  background: #dadfe6;
  overflow-y: hidden;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
    justify-content: center
}
.form-button {
    background-color: #274B89;
}
input{
    border-radius: 4px;
    /* background-color: #FFFFFF; */
    /* padding: 20px */
}
h1{
    color: white;
    font-size: 40px
}
.error{
    color: red
}
</style>