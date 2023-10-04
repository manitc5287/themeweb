import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],

  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      // Return a new state array with the new item added
      return [...state, newItem];
    },

  
    
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      // Find the index of the clicked item with the specified itemIdToRemove
      const indexToRemove = state.findIndex(item => item._id === itemIdToRemove);
    
      if (indexToRemove !== -1) {
        // If the item is found, remove it from the state array
        state.splice(indexToRemove, 1);
      }
    },
    

    clearCart: (state) => {
      return [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
