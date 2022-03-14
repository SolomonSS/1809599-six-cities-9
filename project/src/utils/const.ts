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
}

export const DEFAULT_CITY = 'Paris';

export const CitiesList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum APIRoute {
  OFFERS = '/hotels',
  FAVORITES = '/favorite',
  CHANGE_FAVORITES_STATUS = '/favorite/{hotelId}/{status}',
  COMMENTS = '/comments',
  LOGIN = '/login',
  LOGOUT = '/logout',
}
