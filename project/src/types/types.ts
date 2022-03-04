export type Offer = {
  bedrooms: number
  city: {
    location: {
      latitude: number
      longitude: number
      zoom: number
    }
    name: string
  }
  description: string
  goods: [string]
  host: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
  id: number
  images: [string]
  isFavorite: boolean
  isPremium: boolean
  location: {
    latitude: number
    longitude: number
    zoom: number
  }
  maxAdults: number
  previewImage: string
  price: number
  rating: number
  title: string
  type: string
  comments: Comment[]
};

export type Comment = {
  comment: string
  date: string
  id: number
  offerId: number
  rating: number
  user: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
};

export type AppScreenProps = {
  offers: Offer[]
}

export type PropsType = {
  offers: Offer[];
}
