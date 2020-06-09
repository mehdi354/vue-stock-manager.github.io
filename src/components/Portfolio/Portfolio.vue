<template>
    <div class="row">
      <div v-if="stocks.length <=0" class="col-12 alert alert-info" role="alert">
        No produucts available. 
      </div>
      <Stock v-else v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
    </div>
</template>
<script>
import Stock from './Stock.vue';
export default {
  data(){
    return {
    }
  },
  components:{
    Stock
  },
  computed: {
    stocks(){
      return this.$store.getters.stockPortfolio;
    }
  }
}
</script>