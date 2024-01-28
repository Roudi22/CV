// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import themeReducer from "./themeReducer"

// const store = configureStore({
//     reducer: themeReducer
//     // other configuration options if needed
//   });
  
//   export default store;

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // other configuration options if needed
});

export default store;