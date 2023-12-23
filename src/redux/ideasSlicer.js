import { createSlice } from "@reduxjs/toolkit";

const ideasSlice = createSlice({
  name: "ideas",
  initialState: {
    data: null,
    loading: true,
    selectedIdea: null,
    currentPage: 1,
    sortKey: "default",
    itemsPerPage: 10,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSelectedIdea: (state, action) => {
      state.selectedIdea = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSortKey: (state, action) => {
      state.sortKey = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export const { setData, setLoading, setSelectedIdea, setCurrentPage, setSortKey, setItemsPerPage } = ideasSlice.actions;

export default ideasSlice.reducer;
