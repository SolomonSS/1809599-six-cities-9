import {APIRoute, AuthorizationStatus} from '../../../utils/const';
import {requireAuthorization, userProcess} from './user-process';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../../../services/api';
import {State} from '../../../types/state';
import {checkAuth} from '../../../services/api-actions';

describe('Test user process reducer:',()=>{
  const state = {authorizationStatus: AuthorizationStatus.Unknown};
  it('Testing set authorization status:', ()=>{
    expect(userProcess.reducer(state, requireAuthorization({authorizationStatus: AuthorizationStatus.Auth})))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth});
  });
});


describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.LOGIN)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuth());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(requireAuthorization.toString());
  });
});
