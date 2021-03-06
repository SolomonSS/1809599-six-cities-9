import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {fakeStore} from '../../../utils/mocks';
import HistoryRoute from '../../history/history-route';
import SortItem from './sort-item';
import {SortTypes} from '../../../utils/const';

describe('Testing SortItem component:',()=>{
  it('Should return SortItem component',()=>{
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <SortItem activeSort={SortTypes.POPULAR} currentSort={SortTypes.POPULAR} handleSortMenuClick={()=>0} handleClick={()=>0}/>
        </HistoryRoute>
      </Provider>,
    );
    expect(screen.getByText(SortTypes.POPULAR)).toBeInTheDocument();
  });
});
