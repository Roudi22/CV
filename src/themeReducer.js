// themeReducer.js
// import { createSlice } from "@reduxjs/toolkit";

// const themeSlice = createSlice({
//   name: "theme",
//   initialState: {
//     darkMode: false
//   },
//   reducers: {
//     toggleTheme: (state) => {
//       state.darkMode = !state.darkMode
//     }
//   }
// })
  
// export const { toggleTheme } = themeSlice.actions;
// export default themeSlice.reducer;
  
const initialState = {
  darkMode: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default themeReducer;