import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateAuth, LoginAuth, updateUser } from "./Api";

const initialState = {
  Auths: [],
  Auth: [],
  Active_Role:'',
  page: 1,
  loading: false,
  error: null,
};

const AsyncFunctionThunk = (name, apiFunction) => {
  return createAsyncThunk(`Auth/${name}`, async (data, { rejectWithValue }) => {
    try {
 
      const response = await apiFunction(data);
   
      return response.data;
    } catch (error) {


      if (error.response && error.response.data) {
     
        return rejectWithValue(error.response.data);
      }
      
      return rejectWithValue({ error: error.message });
      throw error;
    }
  });
};

export const LoginAuths = AsyncFunctionThunk('LoginAuth', LoginAuth);
export const CreateAuths = AsyncFunctionThunk('CreateAuth', CreateAuth);
export const updateUsers = AsyncFunctionThunk('updateUsers', updateUser);

 

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.Active_Role = action.payload;
    },
    setloadertrue:(state,action)=>{
      state.loading = true;
  
          },
          setloaderFalse:(state,action)=>{
            state.loading = false;
                }
        
  },
  extraReducers: (builder) => {
    builder
    .addCase(LoginAuths.fulfilled, (state, action) => {
        state.Auth = action.payload;
        state.loading = false;
      })
      .addCase(LoginAuths.pending, (state) => {
        state.loading = true;
      })
      .addCase(LoginAuths.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(CreateAuths.fulfilled, (state, action) => {
        state.Auth = action.payload;
        state.loading = false;
      })
      .addCase(CreateAuths.pending, (state) => {
        state.loading = true;
      })
      .addCase(CreateAuths.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUsers.fulfilled, (state, action) => {
        state.Auth = action.payload;
        state.loading = false;
      })
      .addCase(updateUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUsers.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload;
      })
       
  },
});

export const { setRole,setloadertrue,setloaderFalse } = AuthSlice.actions;

export default AuthSlice.reducer;
