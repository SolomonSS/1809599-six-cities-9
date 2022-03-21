import {Comment} from '../../types/types';
import Review from './review';
import ReviewForm from './review-form';
import {useSelector} from 'react-redux';
import {checkAuth} from '../../store/selectors';
import {AuthorizationStatus} from '../../utils/const';

type ReviewsProps = {
  reviews: Comment[]
};

function Reviews({reviews}: ReviewsProps) {
  const auth = useSelector(checkAuth);
  const reviewForm = auth === AuthorizationStatus.Auth ? <ReviewForm/> : null;
  if(reviews){
    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
        <ul className="reviews__list">
          {reviews.map((review) => <Review key={review.id} review={review}/>)}
        </ul>
        {reviewForm}
      </section>);
  } else {
    return null;
  }
}

export default Reviews;
