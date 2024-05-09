import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AccountState {
  accounts: Array<Record<string, any>>;
  type: string;
  isProcessing: boolean;
}

const initialState: AccountState = {
  accounts: [],
  type: '',
  isProcessing: false,
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    getAccountList: (state: AccountState) => {
      state.isProcessing = true;
    },

    getAccountListSuccess: (
      state: AccountState,
      action: any,
    ) => {
      console.log('action', action);
      
      state.type = action.type;
      state.accounts = action.data;
      state.isProcessing = false;
    },

    getAccountListFailed: (state: AccountState, action: PayloadAction<any>) => {
      state.type = action.type;
      state.isProcessing = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAccountList, getAccountListSuccess, getAccountListFailed } =
  accountSlice.actions;

export default accountSlice.reducer;
