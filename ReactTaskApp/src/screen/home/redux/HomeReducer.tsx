import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoadingPostData: false,
  Alldata: [],
  isAlldatagetSuucess: false,
};

const HomeSlice = createSlice({
  name: 'HomeReducer',
  initialState,
  reducers: {
    fetchAllPostStarted(state) {
      state.isLoadingPostData = true;
      state.isAlldatagetSuucess = false;
    },
    fetchAllPostSuccess(state, payload) {
      state.isAlldatagetSuucess = true;
      state.isLoadingPostData = false;
      state.Alldata = payload;
    },
    fetchAllPostFail(state) {
      state.isLoadingPostData = false;
      state.isAlldatagetSuucess = false;
    },
  },
});

const {actions, reducer} = HomeSlice;

export const {fetchAllPostStarted, fetchAllPostSuccess, fetchAllPostFail} =
  actions;
export default reducer;
