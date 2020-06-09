<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock <strong>Manager</strong></router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <router-link to="/Portfolio" class="nav-item" tag="li" activeClass="active"><a class="nav-link">Portfolio</a></router-link>
          <router-link to="/Stocks" tag="li" class="nav-item" activeClass="active"><a class="nav-link">Stocks</a></router-link>
        </ul>
        
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" class="nav-link" @click="endDay">End Day</a></li>
          <li 
            class="nav-item dropdown"
            :class= "{show: isDropDownOpen}"
            @click= "isDropDownOpen = !isDropDownOpen"
          >
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu" :class= "{show: isDropDownOpen}">
              <a href="#" class="dropdown-item" @click="saveData">Save</a>
              <a href="#" class="dropdown-item" @click="loadData">Load</a>
            </ul>
          </li>
        </ul>
        <div class="navbar-text navbar-right ml-5"> Funds: <strong>{{funds | price-format}}</strong></div>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>
<script>
import {mapActions} from 'vuex';
// import axios from 'axios';
export default {
  data(){
    return{
      isDropDownOpen: false 
    }
  },
  computed:{
    funds() {
      return this.$store.getters.funds 
    }
  },
  methods:{
    ...mapActions({
      randomizeStocks : 'rndStocks' ,
      fetchData : 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds : this.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$axios.put('data.json',data);
    },
    loadData(){
      this.fetchData();
    }
  }
}
</script>