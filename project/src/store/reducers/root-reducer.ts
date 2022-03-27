import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../../utils/const';
import {dataProcess} from './data/data-process';
import {surfProcess} from './surf-process/surf-process';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.data]: dataProcess.reducer,
  [NameSpace.surf]: surfProcess.reducer,
  [NameSpace.user]: userProcess.reducer,
});
