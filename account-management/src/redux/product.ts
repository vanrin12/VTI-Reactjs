import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ProductState {
  products: Array<Record<string, any>>;
  type: string;
  isProcessing: boolean;
}
const initialState: ProductState = {
  products: [],
  type: '',
  isProcessing: false,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductList: (state: ProductState) => {
      state.isProcessing = true;
    },

    getProductListSuccess: (
      state: ProductState,
      action: any,
    ) => {
      state.type = action.type;
      state.products = action.data.content;
      state.isProcessing = false;
    },

    getProductListFailed: (state: ProductState, action: PayloadAction<any>) => {
      state.type = action.type;
      state.isProcessing = false;
    },
  }
})

export const { getProductList, getProductListSuccess, getProductListFailed } = productSlice.actions;

export default productSlice.reducer;