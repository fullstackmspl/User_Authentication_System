import { createSlice } from '@reduxjs/toolkit';

const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    message: '',
    type: 'info', // info, success, warning, error
  },
  reducers: {
    showToast: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    clearToast: (state) => {
      state.message = '';
      state.type = 'info';
    },
  },
});

export const { showToast, clearToast } = toastSlice.actions;
export default toastSlice.reducer;