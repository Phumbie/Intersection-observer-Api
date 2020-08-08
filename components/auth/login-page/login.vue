<template>
  <div id="login">
    <div class="d-flex justify-content-center mt-4">
      <div class="logo">
        <nuxt-link to="/">
        <img src="images/logo.svg" alt="logo" class="logo" />
        </nuxt-link>
      </div>
      <h1>Spottr</h1>
    </div>
    <div>
      <center>
        <small class="text-secondary text-center small-text">Sign in to your account to continue</small>
        <form action class="align-middle">
          <div class="col-lg-5 form-group">
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="Company's E-mail"
             v-model="data.email"/>
          </div>
          <div class="form-group col-lg-5">
            <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="data.password" />
          </div>
          <div class="form-group col-lg-5 button-col">
            <button class="btn btn-primary mx-auto" @click.prevent="login">Sign In</button>
            <small id="emailHelp" class="form-text text-muted text-right">
              Don't have an account?
              <nuxt-link to="/signUp">Sign Up</nuxt-link>
            </small>
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
    return{
      data:{
        email: '',
        password: '',
        fcm_token: "ghyjonh"
      },
      errors: ''
    }
  },
  methods:{
    async login(){
      try{
        let response = await this.$http.post('/auth/user/login', this.data)
         let token = response.data.data.token;
                let user = response.data.data.user;
                Auth.loginUser(user,token);
                // console.log(request)
                // localStorage.setItem('Token',token); // Token = name ,token= token gotten from server
                // localStorage.setItem('User',JSON.stringify(user));
                this.$router.push({
                    path:"/userhome"
                })
            console.log(response)
      }catch(err){
        console.log(err)
        let error = err.response.data.message
        console.log(error)
        this.errors = error
        console.log(this.errors)
      }
    }
  }
}
</script>

<style scoped>
#login {
  background-color: #dadfe6;
  overflow-y: hidden;
  height: 100vh;
}
form{
    position: relative;
    top: 10em;
}
.small-text {
    position: relative;
    top: 5em;
}
.form-button {
    background-color: #274B89;
}
.button-col {
    position: relative;
    top: 3em;
}
</style>