<template>
    <section id="header-wrap">
       <navbar/>
      <div id="hero-area" class="hero-area-bg">
        <div class="container">      
          <div class="row">
            <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
              <div class="contents">
                <h2 class="head-title">Buy and Sell from anywhere safely</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id reiciendis provident perferendis. Officia voluptatem magni aspernatur reprehenderit neque, nam porro optio corporis nulla error consectetur facere dolor in expedita soluta?</p>
                <div class="header-button">
                  <a rel="nofollow" href="#" class=""> <img style="height: 40%; width: 30%" src="/images/google-play-badge.png" alt=""> </a>
                  <!-- <a href="#" class="btn btn-border video-popup">Intro Video</a> -->
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
              <div class="intro-img"> 
                <img class="img-fluid" src="images/undraw-mobile.svg" alt="">
              </div>            
            </div>
          </div> 
        </div> 
      </div>
      <!-- Hero Area End -->
         
    </section>
</template>
<script>
import navbar from './navbar'
export default {
    components:{
      navbar,
    }
}
</script>

<style scoped>
#header-wrap{
  height: 100%
}
p{
  font-size: 1rem;
  color: black
}
/* #header{
    height: 70vh;
    background:linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('~static/images/header.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    
}
.header-topic{
    color: white;
    z-index: 5;
    align-self: center;
}

.header-head{
  color: white
}
@media (min-width: 1025px)  {
  
 .header-topic{
     width: 50%
 }
  
}
.header-container{
    display: flex !important;
    flex-direction: row !important;
    align-content: end !important;
    height: 100%
}
.header-button{
   font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    color:  white;
    padding:15px 25px;
    background-color: #274B89;
    border-radius: 10px;
    border: none;
    --color: #ef6eae;
    --hover: white;
    animation: pulse 1s infinite;
    box-shadow: 0 0 0 1em rgba(255, 255, 255, 0);
}


@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}


@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}

.header-button:hover,
.header-button:focus {
  -webkit-animation: pulse 0.5s infinite;
          animation: pulse 0.5s infinite;
        box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);
}

@-webkit-keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--hover);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--hover);
  }
} */
</style>