<template>
  <div class="">
    <dashboard/>
  </div>
</template>

<script>
import dashboard from '@/components/dashboard/dashboard'
import auth from '~/middleware/auth'
export default {
  layout: 'default',
  middleware: [auth],
  components:{
      dashboard
  }
 
}
</script>