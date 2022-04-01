import {ChangeEvent, FormEvent, Fragment, useState} from 'react';
import {NewComment} from '../../../types/types';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {completeComments, postReview} from '../../../services/api-actions';
import {submitingComment} from '../../../store/reducers/surf-process/surf-process';

const Stars = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly',
  },
  {
    value: 1,
    title: 'terribly',
  },
];

function ReviewForm(){
  const dispatch = useAppDispatch();
  const [inputRating, setInputRating] = useState(0);
  const [inputComment, setInputComment] = useState('');
  const {id: propertyId} = useParams();
  const {isSubmiting} = useAppSelector((({SURF}) => SURF));

  const resetForm = () =>{
    setInputRating(0);
    setInputComment('');
  };

  const handleStarsChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = +evt.target.value;
    setInputRating(value);
  };

  const isDisabled: boolean = inputRating === 0 || inputComment.length < 50 || isSubmiting;
  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>)=> {
    evt.preventDefault();
    const newComment: NewComment = {
      comment: inputComment,
      rating: +inputRating,
      id: Number(propertyId),
    };
    dispatch(submitingComment(true));
    dispatch(postReview(newComment));
    dispatch(completeComments(Number(propertyId)));
    resetForm();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleOnSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Stars.map((star) =>(
          <Fragment key={star.value}>
            <input className="form__rating-input visually-hidden" name="rating" value={star.value} id={`${star.value}-stars`} type="radio" onChange={handleStarsChange} checked={inputRating === star.value}/>
            <label htmlFor={`${star.value}-stars`} className="reviews__rating-label form__rating-label" title={`${star.title}`}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" disabled={isSubmiting} onChange={({target}) => setInputComment(target.value)} value={inputComment}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
