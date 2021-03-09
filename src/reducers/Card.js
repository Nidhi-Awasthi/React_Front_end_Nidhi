import { createSlice } from "@reduxjs/toolkit";

/*
 * User Intial State
 */
const initialState = {
  cardList: [],
  currentPage: 1,
  numOfRecordsPerPage: 12,
  getNumOfRecordsFromApiAtOneTime: 60,
  pageToFetchFromApi: 0, //This is the param which we will pass in the cardListAPI
};

/*
 * Slice
 */
const slice = createSlice({
  name: "Card",
  initialState,
  reducers: {
    getCardList: (state, action) => {
      state.cardList = state.cardList.concat(action.payload);
      state.pageToFetchFromApi = state.pageToFetchFromApi + 1;
    },
    fetchPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

/**
 * Exporting Functions
 */
export const { getCardList, fetchPage } = slice.actions;

/**
 * Exporting Reducer
 */
export default slice.reducer;
