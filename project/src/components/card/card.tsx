import {ChangeStatus, Offer} from '../../types/types';
import {Link, useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, FavoriteStatusButton} from '../../utils/const';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeStatus} from '../../services/api-actions';
import {submitingChangeStatus} from '../../store/reducers/surf-process/surf-process';

type CardProps = {
  offer: Offer,
  handleOnMouseOver?: (id: number | null) => void,
  mode: string
};

function Card({offer, handleOnMouseOver = () => void 0, mode}: CardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {isSubmiting} = useAppSelector(({SURF})=>SURF);

  const {type, previewImage, price, rating, title, id, isFavorite} = offer;
  const isFavoriteStatus = isFavorite ? FavoriteStatusButton : '';
  const handleChangeStatus = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      const statusData: ChangeStatus = {
        id: id,
        status: Number(!isFavorite),
      };
      dispatch(submitingChangeStatus(true));
      dispatch(changeStatus(statusData));
    } else {
      navigate(AppRoute.Login);
    }
  };
  return (
    <article className={`${mode} place-card`} onMouseOver={() => handleOnMouseOver(id)} onMouseLeave={() => handleOnMouseOver(null)}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to='/'>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavoriteStatus}`} disabled={isSubmiting} type="button" onClick={handleChangeStatus}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating {rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
