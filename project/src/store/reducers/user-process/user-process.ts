import {UserProcess} from "../../../types/state";
import {AuthorizationStatus, NameSpace} from "../../../utils/const";
import {createSlice} from "@reduxjs/toolkit";

const initialState:UserProcess ={
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
  },
});

export const {requireAuthorization} = userProcess.actions;
