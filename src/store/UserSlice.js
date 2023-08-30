// import { createSlice } from '@reduxjs/toolkit';

// export const UserSlice = createSlice({
//   name: 'users',
//   initialState: {
//     data: [],
//   },
//   reducers: {
//     usersData: (state, action) => {
//       state.data = action.payload;
//     },
//   },
// });

// export default UserSlice.reducer;
// export const { usersData } = UserSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
  },

  reducers: {
    usersData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default UserSlice.reducer;
export const { usersData } = UserSlice.actions;
