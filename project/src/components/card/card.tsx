import {Offer} from '../../types/types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type CardProps = {
  offer: Offer,
  selectedOffer: number|null,
  handleOnMouseOver: (arg0: number) => void,
  mode: string
};

function Card({offer, handleOnMouseOver, selectedOffer, mode}:CardProps):JSX.Element {
  const {type, previewImage, price, rating, title, id} = offer;

  const handleMouseOver = () =>{
    if(id===selectedOffer){
      handleOnMouseOver(id);
    }
  };

  return (
    <article className={`${mode} place-card`} onMouseOver={handleMouseOver}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
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
