import Reviews from '../reviews/reviews';
import {useParams} from 'react-router-dom';
import {Fragment, useEffect, useState} from 'react';
import Header from '../header/header';
import Map from '../map/map';
import {CardMods, MapMods} from '../../utils/const';
import OtherPlaces from '../other-places/other-places';
import {completeComments, completeNearbyOffers, completeOffer} from '../../services/api-actions';
import {useSelector} from 'react-redux';
import {getCurrentOffer, getNearby, getReviews} from '../../store/selectors';
import {store} from '../../store';
import NotFound from '../not-found/not-found';


function Property() {
  const offer = useSelector(getCurrentOffer);
  const reviews = useSelector(getReviews);
  const nearbyOffers = useSelector(getNearby);

  const {id: propertyId} = useParams();
  const [activeCard, setActiveCard] = useState<number | null>(Number(propertyId));
  const handleOnMouseOver = (cardId: number | null) => setActiveCard(cardId);

  useEffect(() => {
    store.dispatch(completeOffer(Number(propertyId)));
    store.dispatch(completeNearbyOffers(Number(propertyId)));
    store.dispatch(completeComments(Number(propertyId)));
  }, [propertyId]);

  if (!offer) {
    return <NotFound/>;
  }

  const {id, images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, host, description} = offer;

  return (
    <Fragment>
      <Header/>
      <main className="page__main page__main--property">
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
                <button className="property__bookmark-button button" type="button">
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
          <Map city={nearbyOffers[0].city} offers={nearbyOffers.concat(offer)} selectedOffer={activeCard} mode={MapMods.Property}/>
        </section>
        <OtherPlaces offers={nearbyOffers} handleOnMouseOver={handleOnMouseOver} mode={CardMods.Property}/>
      </main>
    </Fragment>
  );
}

export default Property;
