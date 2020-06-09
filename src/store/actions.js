import Vue from 'vue';
const axios = require('axios');
export const loadData = ({commit})=> {
    
    axios.get('data.json')
                .then(response => {
                    if(response) {
                        const stocks = response.data.stocks;
                        const funds = response.data.funds;
                        const stockPortfolio = response.data.stockPortfolio;
                        const portfolio = {
                        funds,
                        stockPortfolio
                        };
                        commit('SET_PORTFOLIO',portfolio);
                        commit('SET_STOCK',stocks);
                    }
                });
};