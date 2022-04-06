import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {fakeStore, makeFakeReviews} from '../../utils/mocks';
import HistoryRoute from '../history/history-route';
import Reviews from './reviews';

const fakeReview = makeFakeReviews(4);

describe('Testing Reviews component', () => {
  it('Should return Reviews component:', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <Reviews reviews={fakeReview}/>
        </HistoryRoute>
      </Provider>,
    );
    expect(screen.getByText(fakeReview[0].comment)).toBeInTheDocument();
  });
});
