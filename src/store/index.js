import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Import your desired storage mechanism
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';

// Define the persist configuration
const persistConfig = {
  key: 'root', // The key for the persisted state in storage
  storage, // The storage mechanism (e.g., localStorage)
  // Optionally, you can add blacklist or whitelist to control what gets persisted:
  // blacklist: ['someReducer'],
  // whitelist: ['anotherReducer'],
};

// Wrap your cartReducer with the persistReducer
const persistedReducer = persistReducer(persistConfig, cartReducer);

// Create the Redux store with the persisted reducer
const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer
  },
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor }; // Export both store and persistor
