import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],

  reducers: {
    addItemtowishlist: (state, action) => {
      const newItem = action.payload;
      // Return a new state array with the new item added
      return [...state, newItem];
    },

  
    
    removeItemfromwishlist: (state, action) => {
      const itemIdToRemove = action.payload;
      return state.filter(item => item._id !== itemIdToRemove);
    },
    
    

    clearWishlist: (state) => {
      return [];
    },
  },
});

export const { addItemtowishlist, removeItemfromwishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
