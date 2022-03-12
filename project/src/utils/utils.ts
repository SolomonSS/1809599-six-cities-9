import {getOffers} from '../store/selectors';
import {useSelector} from 'react-redux';

function useFilter (currentCity:string){
  const offers = useSelector(getOffers);
  return offers.filter((offer)=>offer.city.name === currentCity);
}

export default useFilter;
