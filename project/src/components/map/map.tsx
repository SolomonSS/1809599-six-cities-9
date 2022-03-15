import {Icon, Marker} from 'leaflet';
import {useEffect, useRef} from 'react';
import {City, Offer} from '../../types/types';
import useMap from '../../hooks/use-map/use-map';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offer[];
  selectedOffer: number | null;
  mode: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({city, offers, selectedOffer, mode}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {

      map.setView({
        lat: city.location.latitude,
        lng: city.location.longitude,
      });

      offers.forEach((offer) => {

        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(selectedOffer !== null && offer.id === selectedOffer ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);

      });
    }
  }, [map, offers, selectedOffer, city]);

  return <div className={`${mode} map`} ref={mapRef}/>;
}

export default Map;
