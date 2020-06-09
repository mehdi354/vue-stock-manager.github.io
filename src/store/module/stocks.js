import stocks from '../../data/stocks';
const state = {
    stocks : []
};
const mutations = {
    'SET_STOCK'(state,stocks){
        state.stocks = stocks;
    },
    'RND_STOCK'(state){
         state.stocks.forEach((stock) => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5 ));
            console.log(stock.price);
        })
    }
};
const actions = {
    initStocks ({commit}) {
        commit('SET_STOCK',stocks);
    },
    rndStocks({commit}){
        commit('RND_STOCK',stocks);
    }
};
const getters = {
    stocks: state => {
        return state.stocks
    }
};

export default {
    state,mutations,actions,getters
}