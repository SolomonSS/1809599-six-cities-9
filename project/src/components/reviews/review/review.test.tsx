import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {fakeStore, makeFakeReviews} from '../../../utils/mocks';
import HistoryRoute from '../../history/history-route';
import Review from './review';

const fakeReview = makeFakeReviews(1);

describe('Testing Review item component', () => {
  it('Should return Review item component:', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <Review review={fakeReview[0]}/>
        </HistoryRoute>
      </Provider>,
    );
    expect(screen.getByText(fakeReview[0].comment)).toBeInTheDocument();
  });
});
