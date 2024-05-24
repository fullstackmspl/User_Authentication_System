import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'error',
  initialState: {
    serverError: false,
  },
  reducers: {
    setServerError(state, action) {
      state.serverError = action.payload;
    },
  },
});

export const { setServerError } = errorSlice.actions;
export default errorSlice.reducer;
