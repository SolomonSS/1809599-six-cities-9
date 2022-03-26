import {DEFAULT_CITY, NameSpace} from '../../../utils/const';
import {createSlice} from '@reduxjs/toolkit';
import {SurfProcess} from '../../../types/state';

const initialState: SurfProcess = {
  activeCity: DEFAULT_CITY,
  email: null,
  isSubmiting: false,
};

export const surfProcess = createSlice({
  name: NameSpace.surf,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      const {city} = action.payload;
      state.activeCity = city;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    submitingComment:(state, action)=>{
      state.isSubmiting = action.payload;
    },
  },
});

export const {changeCity, setEmail, submitingComment} = surfProcess.actions;
