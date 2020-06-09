const state = {
    funds: 1000,
    stocks : []
};
const mutations = {
    'BUY_STOCK'(state,{stockId,quantity,stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if(record) {
            record.quantity += quantity;
        }else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        console.log(state.stocks);
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state,{stockId,quantity,stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if(record.quantity > quantity) {
            record.quantity -= quantity;
        }else {
            state.stocks.splice(state.stocks.indexOf(record),1)
        }
        state.funds += stockPrice * quantity;
    },
    'SET_PORTFOLIO'(state,portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio;
    }
};
const actions = {
    buyStock({commit},product) {
        commit('BUY_STOCK',product)
    },
    sellStock({commit},product) {
        commit('SELL_STOCK',product)
    },
};
const getters = {
    stockPortfolio: (state,getters) => {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element=> element.id == stock.id );
            if(record) {
                return {
                    id: stock.id,
                    name: record.name,
                    price: record.price,
                    quantity: stock.quantity
                }
            }
            console.log(state.stocks);
        });
    },
    funds: state => {
        return state.funds;
    }
};

export default {
    state,mutations,actions,getters
}