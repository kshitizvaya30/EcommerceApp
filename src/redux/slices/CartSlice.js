const {createSlice} = require('@reduxjs/toolkit');

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    addItemToCart(state, action) {
      let CartData = state.data;
      let isItemExist = false;

      CartData.map(item => {
        if (item.id == action.payload.id) {
          isItemExist = true;
          item.qty = item.qty + 1;
        }
      });

      if (!isItemExist) {
        CartData.push(action.payload);
      }

      state.data = CartData;
    },
    removeItemFromCart(state, action) {
      let CartData = state.data;
      CartData.map(item => {
        if (item.id == action.payload.id) {
          item.qty = item.qty - 1;
        }

        if (item.qty < 1) {
          CartData = CartData.filter(item => item.id !== action.payload.id);
        }
      });

      state.data = CartData;
    },
    emptyCart(state, action) {
      state.data = [];
    }
  },
});
export const {addItemToCart, removeItemFromCart, emptyCart} = CartSlice.actions;
export default CartSlice.reducer;
