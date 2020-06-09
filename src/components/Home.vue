<template>
  <div>
    <div class="alert alert-success" role="alert">
      <h6>Welcome To Stock Manager Dashboard</h6>
    </div>
    
    <h6 class="my-3"> To Buy Stock <router-link to="/Stocks" class="btn btn-primary btn-sm">Click Here</router-link></h6>
    <h6 class="my-3"> To Check Your Stock <router-link to="/Portfolio" class="btn btn-primary btn-sm">Click Here</router-link></h6>
    <hr>
    <h6> Your Available Funds: {{ funds | price-format}} </h6>
  </div>
</template>
<script>
export default {
  computed:{
    funds() {
      return this.$store.getters.funds 
    }
  }
}
</script>