import { createSlice } from "@reduxjs/toolkit";
import type { AppDispatch } from './store';

function fetchIncrementValue(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 5) + 1);
    }, 1000);
  });
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, loading: false },
  reducers: {
    incremented: (state) => {
      state.count += 1;
    },  
    decremented: (state) => {
      state.count -= 1;
    },  
    addedBy: (state, action: { payload: number }) => {
      state.count += action.payload;
    },  
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },  
  },  
});  

export const { incremented, decremented, addedBy, setLoading } =
  counterSlice.actions;
export default counterSlice;  

export function incrementAsync() {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    const amount = await fetchIncrementValue();
    dispatch(addedBy(amount));
    dispatch(setLoading(false));
  };
}
