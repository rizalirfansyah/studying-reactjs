import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");

// const initialState = {
//   cart: [],
// };

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
console.log("oncreate store: ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE: ", store.getState());
});

// const action1 = addToCart({ id: 1, qty: 20 });
// store.dispatch(action1);
// atau bisa dengan
store.dispatch(addToCart({ id: 1, qty: 20 }));
