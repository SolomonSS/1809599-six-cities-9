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
