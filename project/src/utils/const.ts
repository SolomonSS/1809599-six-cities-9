export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/',
  Main = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum MapMods{
  MainScreen = 'cities__map',
  Property = 'property__map'
}

export enum CardMods {
  Main = 'cities__place-card',
  Property = 'near-places__card',
  Favorite = 'favorites__card',
}

export const DEFAULT_CITY = 'Paris';

export const CitiesList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum APIRoute {
  OFFERS = '/hotels',
  FAVORITES = '/favorite',
  COMMENTS = '/comments',
  LOGIN = '/login',
  LOGOUT = '/logout',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum SortTypes {
  POPULAR = 'Popular',
  PRICE_LOW_HIGH = 'Price: low to high',
  PRICE_HIGH_LOW = 'Price: high to low',
  TOP_RATED = 'Top rated first'
}

export const ActiveSortClass = 'places__option--active';
export const FavoriteStatusButton = 'place-card__bookmark-button--active';

export enum NameSpace {
  data = 'DATA',
  surf = 'SURF',
  user = 'USER',
}
