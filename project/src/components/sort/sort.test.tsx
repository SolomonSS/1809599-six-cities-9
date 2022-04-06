import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {fakeStore} from '../../utils/mocks';
import HistoryRoute from '../history/history-route';
import {SortTypes} from '../../utils/const';
import Sort from './sort';
import * as faker from 'faker';

describe('Testing Sort component:',()=>{
  it('Should return Sort component:',()=>{
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <Sort activeSortType={SortTypes.POPULAR} setSortType={faker.setLocale}/>
        </HistoryRoute>
      </Provider>,
    );
    expect(screen.getByTestId('Sort-component-hear')).toBeInTheDocument();
    expect(screen.getByText(SortTypes.TOP_RATED)).toBeInTheDocument();
  });
});
