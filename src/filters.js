import Vue from 'vue';


Vue.filter('price-format',(price)=>{
    return `$${price}`
});

Vue.filter('first-capital',(name)=> name.charAt(0).toUpperCase() + name.slice(1));
Vue.filter('capital',(name)=> name.toUpperCase());