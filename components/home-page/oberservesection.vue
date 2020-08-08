<template>
    
    <div ref="fixImage" class="fix-image">
        <div class="row iphone"  data-src="/images/spottr-image.png">
            <div class="col-md-6 col-xs-12">
                <div class="section-header">
                    <div class="opportunity-image">
                    <img  style="height: 30%; width: 50%"  src="/images/advertise.svg" alt="">
                </div>
                <h2 class="section-title wow fadeInDown pt-4" data-wow-delay="0.3s">Create Opportunities</h2>
                <!-- <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div> -->
                
                <p class="wow fadeInUp" data-wow-delay="0.4s">Do you have Items or Products you want to sell? Or do you want to view and buy products? <br> You can view and also create opportunites from the comfort of your home and process all transactions and logistics right from there. Just wait at home and the goods come to you!</p>
                </div>
            </div>
            <div class="col-md-6 col-xs-12 observe">
                <div class="opportunity-image my-auto float-right" :class="{fixed: fixImage}">
                    <img class="iphone-pic " style="height: 100%; width: 100%" :src="image ? image : '/images/spotter-image.png'" alt="" >
                </div>
            </div>
        </div>
        <div class="row iphone"  data-src="/images/request-image.png">
             <div class="col-md-6 col-xs-12">
                 
                <div class="section-header">
                      <div class="opportunity-image">
                        <img  style="height: 30%; width: 50%"  src="/images/request.svg" alt="">
                    </div>
                <h2 class="section-title wow fadeInDown p-4" data-wow-delay="0.3s">Make Requests</h2>
                <!-- <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div> -->
                <p class="wow fadeInUp" data-wow-delay="0.4s">Manage all your requests from your App and enjoy smooth operation on all orders</p>
                </div>
            </div>
            <div class="col-md-6 col-xs-12 observe">
                <div class="opportunity-image float-right" :class="{fixed: fixImage}">
                    <img class="iphone-pic "  src="" alt="">
                </div>
            </div>
        </div>
        <div class="row iphone" data-src="/images/payment.png">
             <div class="col-md-6 col-xs-12">
                <div class="section-header">
                     <div class="opportunity-image " >
                            <img  style="height: 30%; width: 50%"  src="/images/creditcard.svg" alt="">
                        </div>
                <h2 class="section-title wow fadeInDown pt-4" data-wow-delay="0.3s">Make Payments</h2>
                <!-- <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div> -->
                <p class="wow fadeInUp" data-wow-delay="0.4s">Make Payments via our crypto method pegged to the naira. Once payments is made, Your coin is held in escrow until orders has been fulfilled! Secure payment guaranteed.Our Escrow system is safe and security guranteed. You can also withdraw or convert your coins to naira whenever you want</p>
                </div>
            </div>
            <div class="col-md-6 col-xs-12 observe">
                 <div class="opportunity-image float-right" :class="{fixed: fixImage}">
                    <img class="iphone-pic "  src="" alt="" >
                </div>
            </div>
        </div>
        <div class="row iphone" data-src="/images/coins.png">
             <div class="col-md-6 col-xs-12">
                <div class="section-header">
                     <div class="opportunity-image " >
                            <img  style="height: 30%; width: 50%"  src="/images/creditcard.svg" alt="">
                        </div>
                <h2 class="section-title wow fadeInDown pt-4" data-wow-delay="0.3s">Withdraw and Pay with Cryptocurrency pegged to the naira</h2>
                
                <p class="wow fadeInUp" data-wow-delay="0.4s">Do you have a product to sell?, Post it as an opportunity on our platform and let users send requests to buy them!</p>
                </div>
            </div>
            <div class="col-md-6 col-xs-12 observe">
                 <div class="opportunity-image float-right" :class="{fixed: fixImage}">
                    <img class="iphone-pic " :src="image" alt="" >
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            observer: null,
            intersected: false,
            // fixImage: false,
            config:{
                root: null,
                rootMargin: '30px',
                threshold: [ 0.3, 0.7, 0.95]
            },
            image: '',
            options:{
                root: null,
                rootMargin: "30px",
                threshold: [0.8]
            }
        }
    },
    mounted() {
        // console.log(this.$el.children)
        this.observeElement()
        this.observeImage()
        this.image = '/images/spottr-image.png'
        // let  entries = this.el.children
    
  },
  methods: {
      observeElement(){
          this.observer = new IntersectionObserver(entries => {
            entries.forEach((entry =>{
                if (entry.isIntersecting) {
                this.intersected = true;
            } else if(this.intersected){
                this.intersected = false;
            }
            }))
            },this.config);
        this.observer.observe(this.$el);
      },
      observeImage(){
          const images = this.$el.children
          let counter = 0
          this.observer = new IntersectionObserver(entries => {
            entries.forEach((entry =>{
                if (entry.isIntersecting) {
                this.image = entry.target.dataset.src
                console.log(this.image)
            } else if(this.intersected){

            }
            }))
           
            },this.options);
        Array.prototype.forEach.call(images, image => {this.observer.observe(image);})
      }
  },
  computed:{
      fixImage(){
          return this.intersected ? true : false;
      }
  },
//   destroyed() {
//     this.observer.disconnect();
//   }
}
</script>
<style scoped>
.fixed{
    position: fixed;
    top: 15%;
    /* margin-right: 12%; */
    transition: all 2s linear;
    transform: translateY(5%);
    /* transform: translateX(2%) */
    right: 12.5%
    }
.iphone{
    height: 100%;
    text-align: center
}
.opportunity-image{
    transition: all 2s linear;
    /* margin-right: 12% */
}

.observe{
    display:none
}
@media (min-width: 1025px)  {
  
 .observe{
     display: block
 }
  
}

@media (min-width: 1025px)  {
  
 .iphone{
     height: 75vh;
     text-align: left
 }
  
}
.fix-image{
    width: 75%;
    margin: auto;
    /* background:url(/images/observe.svg);
    background-size:cover */
}
p{
    color: black;
    font-size: 18px
}
h2{
    color: #274B89
}
</style>
