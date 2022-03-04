import {Comment} from "../../types/types";
import Review from "./review";
import ReviewForm from "./review-form";

type ReviewsProps = {
  reviews: Comment[]
};

const Reviews = ({reviews}:ReviewsProps)=>(
  <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.map((review)=><Review review={review}/>)}
    </ul>
    <ReviewForm/>
    </section>
);

export default Reviews;
