const { createStore } = require("redux");
const cartReducers = require("../reducers/cartReducers");

export const store = createStore(cartReducers);