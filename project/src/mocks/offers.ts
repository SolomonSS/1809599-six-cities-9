import {Offer} from '../types/types';
import {comments} from "./comments";

const firstOffer: Offer = {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": "Amsterdam"
    },
    "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    "goods": [
      "Heating"
    ],
    "host": {
      "avatarUrl": "img/1.png",
      "id": 1,
      "isPro": true,
      "name": "Angelina"
    },
    "id": 1,
    "images": [
      "img/apartment-02.jpg"
    ],
    "isFavorite": true,
    "isPremium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "maxAdults": 4,
    "previewImage": "img/1.png",
    "price": 120,
    "rating": 4.8,
    "title": "Beautiful & luxurious studio at great location",
    "type": "apartment",
    'comments': comments,
  };

const secondOffer: Offer = {
    "bedrooms": 4,
    "city": {
      "location": {
        "latitude": 51.370216,
        "longitude": 3.895168,
        "zoom": 10
      },
      "name": "Amsterdam"
    },
    "description": "That hides behind a a river by the unique lightness of Amsterdam.",
    "goods": [
      "Heating"
    ],
    "host": {
      "avatarUrl": "img/1.png",
      "id": 2,
      "isPro": true,
      "name": "Angelina"
    },
    "id": 2,
    "images": [
      "img/apartment-01.jpg"
    ],
    "isFavorite": true,
    "isPremium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "maxAdults": 4,
    "previewImage": "img/apartment-01.jpg",
    "price": 120,
    "rating": 4.8,
    "title": "Beautiful & luxurious studio at great location",
    "type": "apartment",
    'comments': comments,
  };

const thirdOffer: Offer =
  {
    "bedrooms": 5,
    "city": {
      "location": {
        "latitude": 51.370216,
        "longitude": 3.895168,
        "zoom": 10
      },
      "name": "Amsterdam"
    },
    "description": "Unique lightness of Amsterdam.",
    "goods": [
      "Heating"
    ],
    "host": {
      "avatarUrl": "img/1.png",
      "id": 3,
      "isPro": true,
      "name": "Angelina"
    },
    "id": 3,
    "images": [
      "img/apartment-01.jpg"
    ],
    "isFavorite": true,
    "isPremium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "maxAdults": 4,
    "previewImage": "img/apartment-01.jpg",
    "price": 120,
    "rating": 4.8,
    "title": "Beautiful & luxurious studio at great location",
    "type": "apartment",
    'comments': comments,
  }
;

const offers: Offer[] = [firstOffer, secondOffer, thirdOffer];

export {offers};
