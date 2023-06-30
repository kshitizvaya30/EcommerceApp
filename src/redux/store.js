import CartReducer from "./slices/CartSlice";
import ProductReducer from "./slices/ProductSlice";
import WishListReducer from "./slices/WishlistSlice";
const { configureStore } = require("@reduxjs/toolkit")

const store = configureStore({
    reducer: {
        product: ProductReducer,
        wishlist: WishListReducer,
        cart: CartReducer
    }
})


export default store;