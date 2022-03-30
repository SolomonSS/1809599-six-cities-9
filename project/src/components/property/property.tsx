import Reviews from '../reviews/reviews';
import {useNavigate, useParams} from 'react-router-dom';
import {Fragment, useCallback, useEffect, useState} from 'react';
import Header from '../header/header';
import Map from '../map/map';
import {AppRoute, AuthorizationStatus, CardMods, FavoriteStatusButton, MapMods} from '../../utils/const';
import OtherPlaces from '../other-places/other-places';
import {changeStatus, completeComments, completeNearbyOffers, completeOffer} from '../../services/api-actions';
import {store} from '../../store';
import NotFound from '../not-found/not-found';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {ChangeStatus} from '../../types/types';

function Property() {
  const {currentOffer, reviews, nearbyOffers} = useAppSelector((({DATA}) => DATA));
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {id: propertyId} = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    store.dispatch(completeOffer(Number(propertyId)));
    store.dispatch(completeNearbyOffers(Number(propertyId)));
    store.dispatch(completeComments(Number(propertyId)));
  }, [propertyId, reviews]);

  if (!currentOffer) {
    return <NotFound/>;
  }

  const {id, images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, host, description,city, isFavorite} = currentOffer;
  const isFavoriteStatus = isFavorite ? FavoriteStatusButton : '';
  const handleChangeStatus = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      const statusData: ChangeStatus = {
        id: id,
        status: Number(!isFavorite),
      };
      dispatch(changeStatus(statusData));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <Fragment>
      <Header/>
      <main className="page__main page__main--property" data-testid={'Hi from Property component'}>
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div className="property__image-wrapper" key={id.toString() + image}>
                  <img className="property__image" src={image} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? <div className="property__mark"><span>Premium</span></div> : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className={`property__bookmark-button button ${isFavoriteStatus}`} type="button" onClick={handleChangeStatus}>
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <li className="property__inside-item">
                    Wi-Fi
                  </li>
                  {goods.map((good) => (
                    <li className="property__inside-item" key={id + good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  {host.isPro ? <span className="property__user-status">Pro</span> : null}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <Reviews reviews={reviews}/>
            </div>
          </div>
          <Map city={city} offers={nearbyOffers.concat(currentOffer)} selectedOffer={id} mode={MapMods.Property}/>
        </section>
        <OtherPlaces offers={nearbyOffers} mode={CardMods.Property}/>
      </main>
    </Fragment>
  );
}

export default Property;
