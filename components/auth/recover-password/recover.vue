<template>
  <div id="recover">
      <div class="d-flex justify-content-center mt-lg-5">
        <div class="logo">
            <img src="images/logo.svg" alt="logo" class="logo">
        </div>
        <h1>Spottr</h1>
    </div>
    <div>
        <center>
            <small class="text-secondary text-center small-text">Simple steps to recover your password</small>
            <form action="" class="align-middle">

                <div class="col-lg-5 form-group">
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Company's E-mail">
                </div>
                <div class="form-group col-lg-5 button-col">
                    <input class="btn btn-block form-button text-white mt-4" type="submit" value="Log In">
                    <small id="emailHelp" class="form-text text-muted text-right">Don't have an account? <nuxt-link to="/signUp">Back to Sign
                            Up</nuxt-link></small>
                </div>

            </form>
        </center>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#recover{
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
    top: 4em;
}
.form-button {
    background-color: #274B89;
}
.button-col {
    position: relative;
    top: 1em;
}
</style>