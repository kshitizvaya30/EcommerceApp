const {createSlice} = require('@reduxjs/toolkit');

const WishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    data: [],
  },
  reducers: {
    isItemInWishlist(state, item) {
      const wishlistData = state.wishlist.data;
      return wishlistData.some(wishlistItem => wishlistItem.id === item.id);
    },
    addItemToWishList(state, action) {
      const wishlistData = state.data;
      const newItem = action.payload;

      const isItemPresent = wishlistData.some(item => item.id === newItem.id);

      if (!isItemPresent) {
        wishlistData.push(newItem);
      }
      state.data = wishlistData;
    },
    removeFromWishlist(state, action) {
      let wishlistData = state.data;
      const itemId = action.payload.id;
      const index = wishlistData.findIndex(item => item.id === itemId);
      if (index !== -1) {
        wishlistData.splice(index, 1);
      }
      state.data = wishlistData;
    },
  },
});
export const {isItemInWishlist, addItemToWishList, removeFromWishlist} =
  WishlistSlice.actions;
export default WishlistSlice.reducer;
