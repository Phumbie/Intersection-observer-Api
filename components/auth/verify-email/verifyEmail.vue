<template>
<div id="verify">
    <center>
        <div class="container h-align">
        <h1>Verify your email address</h1>
        <small class="form-text text-muted">To complete your business and start doing business with us,<br> verify your email!</small>
         <div class="form-group col-lg-5 button-col">
        <input class="btn btn-block form-button text-white mt-2 rounded-pill" type="submit" value="Verify">
         </div>
    </div>
    </center>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#verify{
  background-color: #dadfe6;
  overflow-y: hidden;
  height: 100vh;
}
h1{
    color: #274B89;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.h-align {
    position: relative;
    top: 10em;
}
.form-button {
    background-color: #274B89;
}
.button-col {
    /* position: relative; */
    /* top: 1em; */
}
</style>